import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { ListType, UploadFile } from "./types";
import { defineComponent, computed } from "vue";
import { listTypes } from "./constants";
import VuiIcon from "../icon";
import VuiProgress from "../progress";
import useClassPrefix from "../../hooks/useClassPrefix";
import is from "../../utils/is";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 当前文件列表
    fileList: {
      type: Array as PropType<UploadFile[]>,
      default: () => []
    },
    // 文件列表展示类型
    listType: {
      type: String as PropType<ListType>,
      validator: (listType: ListType) => listTypes.includes(listType),
      default: "text"
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
    }
  };
};

export type UploadListProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-upload-list",
  props: createProps(),
  emits: ["preview", "remove"],
  setup(props, context) {
    // onPreview 事件回调
    const handlePreview = (file: UploadFile) => {
      context.emit("preview", file);
    };

    // onRemove 事件回调
    const handleRemove = (file: UploadFile) => {
      if (!props.beforeRemove) {
        context.emit("remove", file);
      }
      else {
        const promise = props.beforeRemove(file, props.fileList);

        if (is.promise(promise)) {
          promise.then(() => context.emit("remove", file)).catch(() => {});
        }
        else if (promise !== false) {
          context.emit("remove", file);
        }
      }
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("upload-list", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => `${classPrefix.value}`);
    classes.elItemThumbnail = computed(() => `${classPrefix.value}-item-thumbnail`);
    classes.elItemName = computed(() => `${classPrefix.value}-item-name`);
    classes.elItemPercentage = computed(() => `${classPrefix.value}-item-percentage`);
    classes.elItemActions = computed(() => `${classPrefix.value}-item-actions`);
    classes.elItemActionPreview = computed(() => {
      return {
        [`${classPrefix.value}-item-action`]: true,
        [`${classPrefix.value}-item-action-preview`]: true
      };
    });
    classes.elItemActionRemove = computed(() => {
      return {
        [`${classPrefix.value}-item-action`]: true,
        [`${classPrefix.value}-item-action-remove`]: true
      };
    });

    // 获取项目 class 样式
    const getItemClassName = (status: string) => {
      return {
        [`${classPrefix.value}-item`]: true,
        [`${classPrefix.value}-item-${status}`]: status
      };
    };

    // 渲染
    return () => {
      return (
        <div class={classes.el.value}>
          {
            props.fileList.map(file => {
              const onPreview = () => handlePreview(file);
              const onRemove = () => handleRemove(file);
              let children = [];

              children.push(
                <div class={classes.elItemThumbnail.value}>
                  {
                    props.listType === "text" ? (
                      <VuiIcon type={file.status === "progress" ? "loading" : "attachment"} />
                    ) : (
                      <img src={file.url} alt={file.name} />
                    )
                  }
                </div>
              );

              if (props.listType !== "picture-card") {
                children.push(
                  <div class={classes.elItemName.value}>{file.name}</div>
                );
              }

              if (props.listType === "text" && !props.disabled) {
                children.push(
                  <div class={classes.elItemActions.value}>
                    <a href="javascript:;" class={classes.elItemActionRemove.value} onClick={onRemove}>
                      <VuiIcon type="dustbin" />
                    </a>
                  </div>
                );
              }
              else if (props.listType === "picture" || props.listType === "picture-card") {
                let actions = [];

                actions.push(
                  <a href="javascript:;" class={classes.elItemActionPreview.value} onClick={onPreview}>
                    <VuiIcon type="eye" />
                  </a>
                );

                if (!props.disabled) {
                  actions.push(
                    <a href="javascript:;" class={classes.elItemActionRemove.value} onClick={onRemove}>
                    <VuiIcon type="dustbin" />
                  </a>
                  );
                }

                children.push(
                  <div class={classes.elItemActions.value}>
                    {actions}
                  </div>
                );
              }

              if (file.status === "progress") {
                children.push(
                  <div class={classes.elItemPercentage.value}>
                    <VuiProgress
                      type={props.listType === "picture-card" ? "circle" : "line"}
                      showInfo={false}
                      percentage={file.percentage}
                      width={48}
                      strokeWidth={2}
                    />
                  </div>
                );
              }

              return (
                <div key={file.id} class={getItemClassName(file.status as string)}>
                  {children}
                </div>
              );
            })
          }
        </div>
      );
    };
  }
});