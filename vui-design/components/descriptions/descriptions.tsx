import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes, CSSProperties } from "vue";
import type { ScreenSizes } from "../../utils/responsive-observer";
import type { Layout, Size, LabelAlign } from "./types";
import { defineComponent, computed } from "vue";
import { getSlotProp } from "../../utils/vue";
import { layouts, sizes, labelAligns } from "./constants";
import useResponsive from "../../hooks/useResponsive";
import range from "../../utils/range";
import getClassName from "../../utils/getClassName";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classNamePrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 描述列表的布局方式
    layout: {
      type: String as PropType<Layout>,
      validator: (layout: Layout) => layouts.includes(layout),
      default: "horizontal"
    },
    // 是否显示边框
    bordered: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 描述列表的尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 描述列表的标题
    title: {
      type: String as PropType<string>,
      default: undefined
    },
    // 描述列表的操作区
    extra: {
      type: String as PropType<string>,
      default: undefined
    },
    // 所占的列数
    columns: {
      type: [Number, Object] as PropType<number | ScreenSizes>,
      default: 3
    },
    // 描述标签右侧是否显示冒号
    colon: {
      type: Boolean as PropType<boolean>,
      default: undefined
    },
    // 描述标签的宽度
    labelWidth: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    // 描述标签的文本对齐方式
    labelAlign: {
      type: String as PropType<LabelAlign>,
      validator: (labelAlign: LabelAlign) => labelAligns.includes(labelAlign),
      default: undefined
    },
    // 自定义描述标签样式
    labelStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义内容区样式
    contentStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    },
    // 自定义内容区表格样式
    tableStyle: {
      type: [String, Object] as PropType<CSSProperties>,
      default: undefined
    }
  };
};

export type DescriptionsProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-descriptions",
  props: createProps(),
  setup(props, context) {
    // 订阅响应
    const screens = useResponsive();

    // 内部状态
    const columns = computed(() => utils.getColumns(props.columns, screens.value));
    const colon = computed(() => !props.bordered && props.colon === undefined ? true : props.colon);
    const tableLayout = computed(() => props.bordered ? "auto" : "fixed");

    // 计算 class 样式
    const className = computed(() => getClassName(props.classNamePrefix, "descriptions"));
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${className.value}`]: true,
        [`${className.value}-bordered`]: props.bordered,
        [`${className.value}-${props.size}`]: props.size
      };
    });
    classes.elHeader = computed(() => `${className.value}-header`);
    classes.elBody = computed(() => `${className.value}-body`);
    classes.elTitle = computed(() => `${className.value}-title`);
    classes.elExtra = computed(() => `${className.value}-extra`);
    classes.elItemLabel = computed(() => {
      return {
        [`${className.value}-item-label`]: true,
        [`${className.value}-item-label-colon`]: colon.value
      };
    });
    classes.elItemContent = computed(() => `${className.value}-item-content`);

    // 计算 style 样式
    let styles: Record<string, ComputedRef> = {};

    styles.elTable = computed(() => {
      const style: CSSProperties = {
        tableLayout: tableLayout.value
      };

      return [style, props.tableStyle as CSSProperties];
    });

    // 
    const getHeader = () => {
      if (!context.slots.title && !props.title && !context.slots.extra && !props.extra) {
        return;
      }

      let title;

      if (context.slots.title || props.title) {
        title = (
          <div class={classes.elTitle.value}>
            {getSlotProp(context.slots, props, "title")}
          </div>
        );
      }

      let extra;

      if (context.slots.extra || props.extra) {
        extra = (
          <div class={classes.elExtra.value}>
            {getSlotProp(context.slots, props, "extra")}
          </div>
        );
      }

      return (
        <div class={classes.elHeader.value}>
          {title}
          {extra}
        </div>
      );
    };

    // 
    const getBody = () => {
      return (
        <div class={classes.elBody.value}>
          <table style={styles.elTable.value}>
            {getColgroup()}
            {getTbody()}
          </table>
        </div>
      );
    };

    // 
    const getColgroup = () => {
      return (
        <colgroup>
          {getColgroupChildren()}
        </colgroup>
      );
    };

    // 
    const getColgroupChildren = () => {
      const isDouble = props.layout === "horizontal" && props.bordered;
      const cols = range(0, isDouble ? (columns.value as number) * 2 : (columns.value as number));

      return cols.map((column, columnIndex) => {
        const width = isDouble && columnIndex % 2 === 0 ? props.labelWidth : undefined;

        return (
          <col key={columnIndex} width={width} />
        );
      });
    };

    // 
    const getTbody = () => {
      return (
        <tbody>
          {getTbodyChildren()}
        </tbody>
      );
    };

    // 
    const getTbodyChildren = () => {
      const rows = utils.getRows(context.slots.default?.(), columns.value as number);

      return rows.map(row => {
        if (props.layout === "horizontal") {
          return (
            <tr>
              {
                row.map(column => {
                  const labelStyle = utils.getLabelStyle(props.labelStyle, column.labelStyle, props.bordered ? props.labelAlign : undefined);
                  const contentStyle = utils.getContentStyle(props.contentStyle, column.contentStyle);
                  let label;

                  if (!props.bordered && column.label) {
                    label = (
                      <span class={classes.elItemLabel.value} style={labelStyle}>
                        {column.label}
                      </span>
                    );
                  }

                  return props.bordered ? (
                    <>
                      <th class={classes.elItemLabel.value} style={labelStyle} colspan={1}>
                        {column.label}
                      </th>
                      <td class={classes.elItemContent.value} style={contentStyle} colspan={column.span * 2 - 1}>
                        {column.children}
                      </td>
                    </>
                  ) : (
                    <td colspan={column.span}>
                      {label}
                      <span class={classes.elItemContent.value} style={contentStyle}>
                        {column.children}
                      </span>
                    </td>
                  );
                })
              }
            </tr>
          );
        }
        else {
          let ths: JSX.Element[] = [];
          let tds: JSX.Element[] = [];

          row.forEach(column => {
            const labelStyle = utils.getLabelStyle(props.labelStyle, column.labelStyle);
            const contentStyle = utils.getContentStyle(props.contentStyle, column.contentStyle);

            props.bordered ? ths.push(
              <th class={classes.elItemLabel.value} style={labelStyle} colspan={column.span}>
                {column.label}
              </th>
            ) : ths.push(
              <th colspan={column.span}>
                <span class={classes.elItemLabel.value} style={labelStyle}>
                  {column.label}
                </span>
              </th>
            );

            props.bordered ? tds.push(
              <td class={classes.elItemContent.value} style={contentStyle} colspan={column.span}>
                {column.children}
              </td>
            ) : tds.push(
              <td colspan={column.span}>
                <span class={classes.elItemContent.value} style={contentStyle}>
                  {column.children}
                </span>
              </td>
            );
          });

          return (
            <>
              <tr>{ths}</tr>
              <tr>{tds}</tr>
            </>
          );
        }
      });
    };

    // 渲染
    return () => {
      const header = getHeader();
      const body = getBody();

      return (
        <div class={classes.el.value}>
          {header}
          {body}
        </div>
      );
    };
  }
});