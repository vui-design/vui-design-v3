import type { ListType, UploadFile } from "./types";
import guid from "../../utils/guid";

/**
* 判断是否为允许被上传的文件类型
* @param {File} file 原始文件对象
* @param {String} accept 允许被上传的文件类型
*/
const isAcceptFile = (file: File, accept: string) => {
  const name = file.name;
  const extension = name.lastIndexOf(".") > -1 ? name.slice(name.lastIndexOf(".")) : "";
  const baseType = file.type.replace(/\/.*$/, "");
  const type = file.type;

  return accept.split(",").map(acceptType => acceptType.trim()).filter(acceptType => acceptType).some(acceptType => {
    if (/\..+$/.test(acceptType)) {
      return extension === acceptType;
    }

    if (/\/\*$/.test(acceptType)) {
      return baseType === acceptType.replace(/\/\*$/, "");
    }

    if (/^[^\/]+\/[^\/]+$/.test(acceptType)) {
      return type === acceptType;
    }

    return false;
  });
};

/**
* 获取等待上传的文件
* @param {File} file 原始文件对象
* @param {String} listType 文件列表展示类型
*/
const getSelectedFile = (file: File, listType: ListType) => {
  const selectedFile: UploadFile = {
    id: guid(),
    name: file.name,
    url: "",
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
    webkitRelativePath: file.webkitRelativePath,
    status: "ready",
    percentage: 0,
    progress: undefined,
    response: undefined,
    error: undefined,
    rawFile: file
  };

  if (listType === "picture" || listType === "picture-card") {
    try {
      selectedFile.url = URL.createObjectURL(file);
    }
    catch(error) {
      console.warn("[Vui Design][Upload]: " + (error as Error).message);
    }
  }

  return selectedFile;
};

/**
* 获取等待上传的文件列表
* @param {Event | DragEvent} e 事件对象
* @param {Object} options 选项
*/
const getSelectedFiles = (e: Event | DragEvent, options: Record<string, unknown>) => {
  let files: File[] = [];

  if (e.type === "change") {
    files = Array.prototype.slice.call((e.target as HTMLInputElement).files);
  }
  else if (e.type === "drop") {
    if (options.directory) {
      console.log(e);
      console.log(e.dataTransfer.items);
    }
    else {
      files = Array.prototype.slice.call(((e as DragEvent).dataTransfer as DataTransfer).files);
    }
  }

  if (options.accept) {
    files = files.filter(file => isAcceptFile(file, options.accept as string));
  }

  if (options.directory) {
    return files;
  }

  return !options.multiple && files.length > 1 ? files.slice(0, 1) : files;
};

/**
* 获取已选择或已上传的文件
* @param {UploadFile} file 文件
*/
const getFile = (file: UploadFile) => {
  return {
    id: file.id ?? guid(),
    name: file.name ?? "",
    url: file.url ?? "",
    type: file.type ?? "",
    size: file.size ?? 0,
    lastModified: file.lastModified ?? 0,
    webkitRelativePath: file.webkitRelativePath ?? "",
    status: file.status ?? "success",
    percentage: file.percentage ?? (file.status === "ready" ? 0 : 100),
    progress: file.progress ?? undefined,
    response: file.response ?? undefined,
    error: file.error ?? undefined,
    rawFile: file.rawFile ?? undefined
  } as UploadFile;
};

/**
* 获取已选择或已上传的文件列表
* @param {UploadFile[]} fileList 文件列表
*/
const getFileList = (fileList: UploadFile[] = []) => {
  return fileList.map(file => getFile(file));
};

/**
* 默认导出指定接口
*/
export default {
  getSelectedFile,
  getSelectedFiles,
  getFile,
  getFileList
};