import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Data } from "../../types";
import type { ListType, UploadFile, UploadRequestOptions, UploadRequest } from "./types";
import { defineComponent, ref, computed } from "vue";
import { useI18n } from "../../locale";
import { getChildren } from "../../utils/vue";
import { listTypes } from "./constants";
import VuiIcon from "../icon";
import VuiButton from "../button";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";
import guid from "../../utils/guid";
import request from "./request";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
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
    // 是否支持多文件上传
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 是否支持拖拽上传
    draggable: {
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
    // 设置上传请求的地址，必填
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
    // 是否禁用
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  };
};

export type UploadListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-upload-selection",
  props: createProps(),
  emits: ["select", "progress", "success", "error"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // DOM 引用
    const inputRef = ref<HTMLInputElement>();
    const inputKey = ref<string>(guid());

    // 拖动状态
    const dragover = ref<boolean>(false);

    // 请求集合
    const requests = new Map<string, UploadRequest>();

    // 转换文件
    const streamToFile = (stream: any, file: File) => {
      if (!is.file(stream) && !is.blob(stream)) {
        return file;
      }
      else {
        if (is.blob(stream)) {
          stream = new File([stream], file.name, {
            type: file.type
          });
        }

        for (let property in file) {
          if (file.hasOwnProperty(property)) {
            stream[property] = file[property];
          }
        }

        return stream;
      }
    };

    // 开始上传
    const upload = (uploadFile: UploadFile) => {
      const options: UploadRequestOptions = {
        action: props.action,
        name: props.name,
        file: uploadFile.rawFile as File,
        headers: props.headers,
        withCredentials: props.withCredentials,
        data: is.function(props.data) ? props.data() : props.data,
        onProgress: progress => {
          uploadFile.status = "progress";
          uploadFile.percentage = progress.loaded / progress.total * 100;
          uploadFile.progress = progress;

          handleProgress(uploadFile);
        },
        onSuccess: response => {
          uploadFile.status = "success";
          uploadFile.response = response;

          requests.delete(uploadFile.id as string);
          handleSuccess(uploadFile);
        },
        onError: error => {
          uploadFile.status = "error";
          uploadFile.error = error;

          requests.delete(uploadFile.id as string);
          handleError(uploadFile);
        }
      };

      requests.set(uploadFile.id as string, props.request(options));
    };

    // 取消上传
    const cancel = (uploadFile: UploadFile) => {
      const request = requests.get(uploadFile.id as string);

      if (!request || !request.abort) {
        return;
      }

      request.abort();
      requests.delete(uploadFile.id as string);
    };

    // 对外提供 upload、cancel 方法
    context.expose({
      upload,
      cancel
    });

    // onButtonClick 事件回调
    const handleButtonClick = () => {
      if (props.disabled) {
        return;
      }

      inputRef.value?.click();
    };

    // onButtonDragover 事件回调
    const handleButtonDragover = (e: DragEvent) => {
      e.preventDefault();

      if (props.disabled) {
        return;
      }

      dragover.value = true;
    };

    // onButtonDragleave 事件回调
    const handleButtonDragleave = (e: DragEvent) => {
      e.preventDefault();

      if (props.disabled) {
        return;
      }

      dragover.value = false;
    };

    // onButtonDrop 事件回调
    const handleButtonDrop = (e: DragEvent) => {
      e.preventDefault();

      if (props.disabled) {
        return;
      }

      dragover.value = false;

      const files: File[] = utils.getSelectedFiles(e, {
        multiple: props.multiple,
        directory: props.directory,
        accept: props.accept
      });

      files.forEach(file => {
        handleProcess(file);
      });
    };

    // onInputChange 事件回调
    const handleInputChange = (e: Event) => {
      if (props.disabled) {
        return;
      }

      const files: File[] = utils.getSelectedFiles(e, {
        multiple: props.multiple,
        directory: props.directory,
        accept: props.accept
      });

      files.forEach(file => {
        handleProcess(file);
      });

      inputKey.value = guid();
    };

    // onProcess 事件回调
    const handleProcess = (file: File) => {
      if (props.beforeUpload) {
        const promise = props.beforeUpload(file);

        if (is.promise(promise)) {
          promise.then(stream => handleSelect(utils.getSelectedFile(streamToFile(stream, file), props.listType))).catch(() => {});
        }
        else if (promise !== false) {
          handleSelect(utils.getSelectedFile(file, props.listType));
        }
      }
      else {
        handleSelect(utils.getSelectedFile(file, props.listType));
      }
    };

    // onSelect 事件回调
    const handleSelect = (uploadFile: UploadFile) => setTimeout(() => {
      context.emit("select", uploadFile);

      if (props.autoUpload) {
        upload(uploadFile);
      }
    }, 0);

    // onProgress 事件回调
    const handleProgress = (uploadFile: UploadFile) => {
      context.emit("progress", uploadFile);
    };

    // onSuccess 事件回调
    const handleSuccess = (uploadFile: UploadFile) => {
      context.emit("success", uploadFile);
    };

    // onError 事件回调
    const handleError = (uploadFile: UploadFile) => {
      context.emit("error", uploadFile);
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("upload-selection", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elButton = computed(() => {
      return {
        [`${classPrefix.value}-button`]: true,
        [`${classPrefix.value}-button-dragover`]: dragover.value,
        [`${classPrefix.value}-button-disabled`]: props.disabled
      };
    });
    classes.elExtra = computed(() => `${classPrefix.value}-extra`);

    // 获取选择按钮
    const getButton = () => {
      let button;

      if (context.slots.default) {
        button = getChildren(context.slots.default());

        if (button.length === 0) {
          button = undefined;
        }
      }

      if (!button) {
        if (props.listType !== "picture-card" && !props.draggable) {
          button = (
            <VuiButton icon="upload" classPrefix={props.classPrefix} disabled={props.disabled}>
              {translate("upload.buttonText")}
            </VuiButton>
          );
        }
        else {
          let buttonText;

          if (!props.draggable) {
            buttonText = translate("upload.buttonText");
          }
          else if (dragover.value) {
            buttonText = translate("upload.dragover");
          }
          else {
            buttonText = translate("upload.drag");
          }

          let extra;

          if (context.slots.extra) {
            extra = getChildren(context.slots.extra());

            if (extra.length === 0) {
              extra = undefined;
            }
          }
          else if (props.extra) {
            extra = props.extra;
          }

          button = (
            <>
              <VuiIcon type={props.draggable ? "upload-cloud" : (props.listType === "picture-card" ? "plus" : "upload")}/>
              <h4>{buttonText}</h4>
              {
                extra ? (
                  <p>{extra}</p>
                ) : null
              }
            </>
          );
        }
      }

      return (
        <div
          class={classes.elButton.value}
          onClick={handleButtonClick}
          onDragover={handleButtonDragover}
          onDragleave={handleButtonDragleave}
          onDrop={handleButtonDrop}
        >
          <input
            type="file"
            key={inputKey.value}
            ref={inputRef}
            accept={props.accept}
            multiple={props.multiple}
            disabled={props.disabled}
            onChange={handleInputChange}
            {...props.directory ? { directory: "directory", webkitdirectory: "webkitdirectory" } : {}}
          />
          {button}
        </div>
      );
    };

    // 获取额外内容
    const getExtra = () => {
      if (props.listType === "picture-card" || props.draggable) {
        return;
      }

      let extra;

      if (context.slots.extra) {
        extra = getChildren(context.slots.extra());

        if (extra.length === 0) {
          extra = undefined;
        }
      }
      else if (is.existy(props.extra)) {
        extra = props.extra;
      }

      if (!extra) {
        return;
      }

      return (
        <div class={classes.elExtra.value}>
          {extra}
        </div>
      );
    };

    // 渲染
    return () => {
      const button = getButton();
      const extra = getExtra();

      return (
        <div class={classes.el.value}>
          {button}
          {extra}
        </div>
      );
    };
  }
});