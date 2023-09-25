import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Data } from "../../types";
import type { ListType, UploadFile, UploadRequestOptions, UploadRequest } from "./types";
import { defineComponent, inject, ref, computed, onBeforeUnmount } from "vue";
import { listTypes } from "./constants";
import { FormInjectionKey, FormItemInjectionKey } from "../form/context";
import VuiUploadSelection from "./upload-selection";
import VuiUploadList from "./upload-list";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import request from "./request";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否显示文件选择按钮
    showSelection: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 默认文件列表
    defaultFileList: {
      type: Array as PropType<UploadFile[]>,
      default: () => []
    },
    // 当前文件列表
    fileList: {
      type: Array as PropType<UploadFile[]>,
      default: () => []
    },
    // 是否显示文件列表
    showFileList: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 文件列表展示类型
    listType: {
      type: String as PropType<ListType>,
      validator: (listType: ListType) => listTypes.includes(listType),
      default: "text"
    },
    // 额外内容
    extra: {
      type: String as PropType<string>,
      default: undefined
    },
    // 是否支持拖拽上传
    draggable: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否支持多文件上传
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否支持文件夹上传
    directory: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 允许上传的文件类型，详见 HTML标准
    accept: {
      type: String as PropType<string>,
      default: ""
    },
    // 覆盖默认的上传行为，可自定义上传实现
    request: {
      type: Function as PropType<(options: UploadRequestOptions) => UploadRequest>,
      default: request
    },
    // 设置上传请求的地址
    action: {
      type: String as PropType<string>,
      default: ""
    },
    // 设置上传请求的头部信息
    headers: {
      type: Object as PropType<Data>,
      default: undefined
    },
    // 上传请求是否携带 cookie 信息
    withCredentials: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 设置上传请求的文件参数名称
    name: {
      type: String as PropType<string>,
      default: "file"
    },
    // 设置上传请求的额外参数或返回额外参数的函数
    data: {
      type: [Object, Function] as PropType<Data | (() => Data)>,
      default: undefined
    },
    // 是否启用自动上传，即选取文件后立即进行上传
    autoUpload: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    // 上传文件之前的钩子函数
    beforeUpload: {
      type: Function as PropType<(file: File) => File | Blob | boolean | Promise<File | Blob | boolean>>,
      default: undefined
    },
    // 删除文件之前的钩子函数
    beforeRemove: {
      type: Function as PropType<(file: UploadFile, fileList: UploadFile[]) => boolean | Promise<boolean>>,
      default: undefined
    },
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 文件状态发生变化时是否触发父级表单验证
    validator: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  };
};

export type UploadProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-upload",
  props: createProps(),
  emits: ["update:fileList", "change", "select", "progress", "success", "error", "preview", "remove"],
  setup(props, context) {
    // 注入祖先组件
    const vuiForm = inject(FormInjectionKey, undefined);
    const vuiFormItem = inject(FormItemInjectionKey, undefined);

    // DOM 引用
    const selectionRef = ref();
    const listRef = ref();

    // 是否为受控模式
    const isControlled = useControlled("fileList");

    // 值（defaultFileList 非受控模式，fileList 受控模式）
    const defaultFileList = ref(props.defaultFileList);
    const fileList = computed(() => utils.getFileList(isControlled.value ? props.fileList : defaultFileList.value));

    // 禁用状态
    const disabled = computed(() => props.disabled ?? vuiForm?.disabled ?? false);

    // 开始上传
    const upload = (uploadFile?: UploadFile) => {
      if (uploadFile) {
        let bool = uploadFile.rawFile && uploadFile.status === "ready";

        if (bool) {
          selectionRef.value.upload(uploadFile);
        }
      }
      else {
        fileList.value.forEach(file => {
          const bool = file.rawFile && file.status === "ready";

          if (bool) {
            selectionRef.value.upload(file);
          }
        });
      }
    };

    // 取消上传
    const cancel = (uploadFile?: UploadFile) => {
      if (uploadFile) {
        let bool = uploadFile.status === "progress";

        if (bool) {
          selectionRef.value.cancel(uploadFile);
        }
      }
      else {
        fileList.value.forEach(file => {
          const bool = file.status === "progress";

          if (bool) {
            selectionRef.value.cancel(file);
          }
        });
      }
    };

    // 对外提供 upload、cancel 方法
    context.expose({
      upload,
      cancel
    });

    // onSelect 事件回调
    const handleSelect = (uploadFile: UploadFile) => {
      let uploadFileList = [...fileList.value];
      let index = uploadFileList.findIndex(target => target.id === uploadFile.id);

      if (index > -1) {
        return;
      }
      console.log(123, uploadFile)

      uploadFileList.push(uploadFile);
      console.log(321, uploadFileList)

      context.emit("select", uploadFileList, uploadFile);
      handleChange(uploadFileList, uploadFile);
    };

    // onProgress 事件回调
    const handleProgress = (uploadFile: UploadFile) => {
      let uploadFileList = [...fileList.value];
      let index = uploadFileList.findIndex(target => target.id === uploadFile.id);

      if (index === -1) {
        return;
      }

      uploadFileList.splice(index, 1, uploadFile);

      context.emit("progress", uploadFileList, uploadFile);
      handleChange(uploadFileList, uploadFile);
    };

    // onSuccess 事件回调
    const handleSuccess = (uploadFile: UploadFile) => {
      let uploadFileList = [...fileList.value];
      let index = uploadFileList.findIndex(target => target.id === uploadFile.id);

      if (index === -1) {
        return;
      }

      uploadFileList.splice(index, 1, uploadFile);

      context.emit("success", uploadFileList, uploadFile);
      handleChange(uploadFileList, uploadFile);
    };

    // onError 事件回调
    const handleError = (uploadFile: UploadFile, error: any) => {
      let uploadFileList = [...fileList.value];
      let index = uploadFileList.findIndex(target => target.id === uploadFile.id);

      if (index === -1) {
        return;
      }

      uploadFileList.splice(index, 1, uploadFile);

      context.emit("error", uploadFileList, uploadFile);
      handleChange(uploadFileList, uploadFile);
    };

    // onPreview 事件回调
    const handlePreview = (uploadFile: UploadFile) => {
      context.emit("preview", uploadFile);
    };

    // onRemove 事件回调
    const handleRemove = (uploadFile: UploadFile) => {
      let uploadFileList = [...fileList.value];
      let index = uploadFileList.findIndex(target => target.id === uploadFile.id);

      if (index === -1) {
        return;
      }

      cancel(uploadFile);
      uploadFileList.splice(index, 1);

      context.emit("remove", uploadFileList, uploadFile);
      handleChange(uploadFileList, uploadFile);
    };

    // onChange 事件回调
    const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
      if (!isControlled.value) {
        defaultFileList.value = newFileList;
      }

      context.emit("update:fileList", newFileList);
      context.emit("change", newFileList, newFile);

      if (props.validator) {
        vuiFormItem?.onChange(newFileList);
      }
    };

    // 组件卸载之前执行
    onBeforeUnmount(() => {
      fileList.value.forEach(file => {
        if (file.url && file.url.indexOf("blob:") === 0) {
          URL.revokeObjectURL(file.url);
        }
      });
    });

    // 计算 class 样式
    const classPrefix = useClassPrefix("upload", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-${props.listType}`]: props.listType,
        [`${classPrefix.value}-draggable`]: props.draggable,
        [`${classPrefix.value}-disabled`]: disabled.value
      };
    });

    // 渲染
    return () => {
      // 
      let selection;

      if (props.showSelection) {
        selection = (
          <VuiUploadSelection
            ref={selectionRef}
            classPrefix={props.classPrefix}
            listType={props.listType}
            extra={props.extra}
            draggable={props.draggable}
            multiple={props.multiple}
            directory={props.directory}
            accept={props.accept}
            request={props.request}
            action={props.action}
            headers={props.headers}
            withCredentials={props.withCredentials}
            name={props.name}
            data={props.data}
            autoUpload={props.autoUpload}
            beforeUpload={props.beforeUpload}
            disabled={disabled.value}
            onSelect={handleSelect}
            onProgress={handleProgress}
            onSuccess={handleSuccess}
            onError={handleError}
            v-slots={context.slots}
          />
        );
      }

      // 
      let list;

      if (props.showFileList && fileList.value.length > 0) {
        list = (
          <VuiUploadList
            ref={listRef}
            classPrefix={props.classPrefix}
            fileList={fileList.value}
            listType={props.listType}
            beforeRemove={props.beforeRemove}
            disabled={disabled.value}
            onPreview={handlePreview}
            onRemove={handleRemove}
          />
        );
      }

      // 
      return (
        <div class={classes.el.value}>
          {props.listType === "picture-card" && !props.draggable ? list : null}
          {selection}
          {props.listType === "text" || props.listType === "picture" || (props.listType === "picture-card" && props.draggable) ? list : null}
        </div>
      );
    };
  }
});