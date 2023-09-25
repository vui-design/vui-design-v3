import type { ListType, UploadFile } from "./types";
import guid from "../../utils/guid";

/**
* 获取等待上传的文件
* @param {File} 原始文件对象
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
* @param {Boolean} multiple 是否支持多文件上传
* @param {Number} accept 接受上传的文件类型
*/
const getSelectedFiles = (e: Event | DragEvent, multiple: boolean, accept: string) => {
  let files: File[] = [];

  if (e.type === "change" && (e?.target as HTMLInputElement)?.files) {
    files = Array.prototype.slice.call((e.target as HTMLInputElement).files);
  }
  else if (e.type === "drop" && (e as DragEvent)?.dataTransfer?.files) {
    files = Array.prototype.slice.call(((e as DragEvent).dataTransfer as DataTransfer).files);
  }

  if (accept) {
    files = files.filter(file => {
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
    });
  }

  if (!multiple && files.length > 1) {
    files = files.slice(0, 1);
  }

  return files;
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