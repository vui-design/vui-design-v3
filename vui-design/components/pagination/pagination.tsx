import type { ExtractPropTypes, PropType, ComputedRef, HTMLAttributes } from "vue";
import type { Size } from "../../types";
import type { Align, showTotal } from "./types";
import { defineComponent, ref, computed, watch } from "vue";
import { useI18n } from "../../locale";
import { sizes, keyCodes } from "../../constants";
import { aligns, pageSizeOptions } from "./constants";
import VuiInput from "../input";
import VuiSelect, { Option as VuiOption } from "../select";
import useClassPrefix from "../../hooks/useClassPrefix";
import useControlled from "../../hooks/useControlled";
import is from "../../utils/is";
import utils from "./utils";

export const createProps = () => {
  return {
    // 样式前缀
    classPrefix: {
      type: String as PropType<string>,
      default: undefined
    },
    // 启用简洁模式
    simple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 分页尺寸
    size: {
      type: String as PropType<Size>,
      validator: (size: Size) => sizes.includes(size),
      default: "medium"
    },
    // 水平对齐方式
    align: {
      type: String as PropType<Size>,
      validator: (align: Align) => aligns.includes(align),
      default: "left"
    },
    // 数据总数
    total: {
      type: Number as PropType<number>,
      validator: (total: number) => total >= 0,
      default: 0
    },
    // 默认页码
    defaultPage: {
      type: Number as PropType<number>,
      validator: (total: number) => total >= 0,
      default: 1
    },
    // 当前页码
    page: {
      type: Number as PropType<number>,
      validator: (total: number) => total >= 0,
      default: 1
    },
    // 默认每页条数
    defaultPageSize: {
      type: Number as PropType<number>,
      validator: (defaultPageSize: number) => defaultPageSize > 0,
      default: 10
    },
    // 当前每页条数
    pageSize: {
      type: Number as PropType<number>,
      validator: (pageSize: number) => pageSize > 0,
      default: 10
    },
    // 替代图标显示的上一页文字
    prevPageText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 替代图标显示的下一页文字
    nextPageText: {
      type: String as PropType<string>,
      default: undefined
    },
    // 用于显示数据总数和当前数据范围
    showTotal: {
      type: [Boolean, Function] as PropType<showTotal>,
      default: false
    },
    // 是否显示 pageSize 切换器
    showPageSizer: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 用于指定 pageSize 的可选选项列表
    pageSizeOptions: {
      type: Array as PropType<number[]>,
      default: () => pageSizeOptions
    },
    // 是否可以快速跳转至某一页
    showPageJumper: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    // 当只有一页时是否隐藏分页
    hideOnSinglePage: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  };
};

export type PaginationProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-pagination",
  props: createProps(),
  emits: ["update:page", "changePage", "update:pageSize", "changePageSize"],
  setup(props, context) {
    // 国际化
    const { translate } = useI18n();

    // 当前每页条数（defaultPageSize 非受控模式，pageSize 受控模式）
    const isPageSizeControlled = useControlled("pageSize");
    const defaultPageSize = ref(props.defaultPageSize);
    const pageSize = computed(() => isPageSizeControlled.value ? props.pageSize : defaultPageSize.value);

    // 当前页码（defaultPage 非受控模式，page 受控模式）
    const isPageControlled = useControlled("page");
    const defaultPage = ref(props.defaultPage);
    const page = computed(() => utils.getPage(props.total, pageSize.value, isPageControlled.value ? props.page : defaultPage.value));

    // 当前总页数
    const totalPages = computed(() => utils.getTotalPages(props.total, pageSize.value));

    // 
    const pageJumperValue = ref();

    // 可见状态
    const visible = computed(() => props.hideOnSinglePage ? (totalPages.value > 1) : true);

    // 
    watch(page, newPage => {
      pageJumperValue.value = newPage;
    }, {
      immediate: true
    });

    // 
    const handlePrev = () => {
      let newPage = page.value - 1;

      if (newPage < 1) {
        return;
      }

      handleChangePage(newPage);
    };

    // 
    const handleNext = () => {
      let newPage = page.value + 1;

      if (newPage > totalPages.value) {
        return;
      }

      handleChangePage(newPage);
    };

    // 
    const handlePrevFive = () => {
      let newPage = page.value - 5;

      if (newPage < 1) {
        newPage = 1;
      }

      handleChangePage(newPage);
    };

    // 
    const handleNextFive = () => {
      let newPage = page.value + 5;

      if (newPage > totalPages.value) {
        newPage = totalPages.value;
      }

      handleChangePage(newPage);
    };

    // 
    const handleChangePage = (newPage: number) => {
      if (page.value === newPage) {
        return;
      }

      if (!isPageControlled.value) {
        defaultPage.value = newPage;
      }

      context.emit("update:page", newPage);
      context.emit("changePage", newPage);
    };

    // 
    const handleChangePageSize = (newPageSize: number) => {
      if (pageSize.value === newPageSize) {
        return;
      }

      const totalPages = utils.getTotalPages(props.total, newPageSize);
      let newPage = page.value;

      if (newPage > totalPages) {
        newPage = totalPages;
      }

      handleChangePage(newPage);

      if (!isPageSizeControlled.value) {
        defaultPageSize.value = newPageSize;
      }

      context.emit("update:pageSize", newPageSize);
      context.emit("changePageSize", newPageSize);
    };

    // 
    const handleKeydownPageJumper = (e: KeyboardEvent) => {
      const keyCode = e.keyCode;

      if (keyCode === keyCodes.up) {
        e.preventDefault();
        handlePrev();
      }
      else if (keyCode === keyCodes.down) {
        e.preventDefault();
        handleNext();
      }
      else if (keyCode === keyCodes.enter) {
        handleBlurPageJumper();
      }
    };

    // 
    const handleBlurPageJumper = () => {
      if ((/^-?[0-9]\d*$/).test(pageJumperValue.value)) {
        let newPage: number = Number(pageJumperValue.value);

        if (newPage === page.value) {
          return;
        }

        if (newPage < 1) {
          newPage = 1;
        }
        else if (newPage > totalPages.value) {
          newPage = totalPages.value;
        }

        handleChangePage(newPage);
      }
      else {
        pageJumperValue.value = page.value;
      }
    };

    // 
    const handleChangePageJumper = (value: string) => {
      pageJumperValue.value = value;
    };

    // 计算 class 样式
    const classPrefix = useClassPrefix("pagination", props);
    let classes: Record<string, ComputedRef> = {};

    classes.el = computed(() => {
      return {
        [`${classPrefix.value}`]: true,
        [`${classPrefix.value}-simple`]: props.simple,
        [`${classPrefix.value}-${props.size}`]: props.size,
        [`${classPrefix.value}-align-${props.align}`]: props.align
      };
    });
    classes.elBtnPrev = computed(() => {
      return {
        [`${classPrefix.value}-button`]: true,
        [`${classPrefix.value}-button-prev`]: true,
        [`${classPrefix.value}-button-disabled`]: page.value <= 1
      };
    });
    classes.elBtnNext = computed(() => {
      return {
        [`${classPrefix.value}-button`]: true,
        [`${classPrefix.value}-button-next`]: true,
        [`${classPrefix.value}-button-disabled`]: page.value >= totalPages.value
      };
    });
    classes.elEllipsis = computed(() => `${classPrefix.value}-ellipsis`);
    classes.elEllipsisIcon = computed(() => `${classPrefix.value}-ellipsis-icon`);
    classes.elEllipsisArrow = computed(() => `${classPrefix.value}-ellipsis-arrow`);
    classes.elTotal = computed(() => `${classPrefix.value}-total`);
    classes.elPageSizer = computed(() => `${classPrefix.value}-page-sizer`);
    classes.elPageJumper = computed(() => `${classPrefix.value}-page-jumper`);

    // 渲染
    return () => {
      // 上一页
      const btnPrev = (
        <div
          key="btnPrev"
          title={translate("pagination.prevPage")}
          class={classes.elBtnPrev.value}
          onClick={handlePrev}
        >
          {
            context.slots.prevPageText ? context.slots.prevPageText() : (
              props.prevPageText ? props.prevPageText : (
                <svg viewBox="0 0 10 10">
                  <path d="M3.6,5l4.1-4.1c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0L2.4,4.6c-0.2,0.2-0.2,0.6,0,0.8l4.5,4.4 c0.2,0.2,0.6,0.2,0.8,0c0.2-0.2,0.2-0.6,0-0.8L3.6,5z" />
                </svg>
              )
            )
          }
        </div>
      );

      // 下一页
      const btnNext = (
        <div
          key="btnNext"
          title={translate("pagination.nextPage")}
          class={classes.elBtnNext.value}
          onClick={handleNext}
        >
          {
            context.slots.nextPageText ? context.slots.nextPageText() : (
              props.nextPageText ? props.nextPageText : (
                <svg viewBox="0 0 10 10">
                  <path d="M6.4,5L2.4,0.9c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l4.5,4.4c0.2,0.2,0.2,0.6,0,0.8L3.2,9.8c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L6.4,5z" />
                </svg>
              )
            )
          }
        </div>
      );

      // 使用简洁模式
      if (props.simple) {
        // 
        return (
          <div v-show={visible.value} class={classes.el.value}>
            {btnPrev}
            <div class={classes.elPageJumper.value}>
              <VuiInput
                size={props.size}
                value={pageJumperValue.value}
                onKeydown={handleKeydownPageJumper}
                onBlur={handleBlurPageJumper}
                onChange={handleChangePageJumper}
              />
              {
                props.showTotal ? (
                  <span>/ {totalPages.value}</span>
                ) : null
              }
            </div>
            {btnNext}
          </div>
        );
      }
      // 使用常规模式
      else {
        // 总数
        let total;

        if (props.showTotal) {
          let totalText;

          if (is.function(props.showTotal)) {
            let rangeFrom = (page.value - 1) * pageSize.value + 1;
            let rangeTo = page.value * pageSize.value;
  
            if (props.total < 1) {
              rangeFrom = 0;
            }
  
            if (rangeTo > props.total) {
              rangeTo = props.total;
            }
  
            totalText = props.showTotal(props.total, [rangeFrom, rangeTo]);
          }
          else {
            totalText = `${translate("pagination.total")} ${props.total} ${translate("pagination." + (props.total > 1 ? "items" : "item"))}`;
          }

          total = (
            <li key="total" class={classes.elTotal.value}>
              {totalText}
            </li>
          );
        }
  
        // 页码
        let items = utils.getItems(page.value, totalPages.value).map(item => {
          if (item === "btnPrevFive") {
            return (
              <div key="btnPrevFive" title={translate("pagination.prevFivePage")} class={classes.elEllipsis.value} onClick={handlePrevFive}>
                <i class={classes.elEllipsisIcon.value}>•••</i>
                <svg class={classes.elEllipsisArrow.value} viewBox="0 0 10 10">
                  <path d="M1.4,5l4.1-4.1c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0L0.2,4.6c-0.2,0.2-0.2,0.6,0,0.8l4.5,4.4c0.2,0.2,0.6,0.2,0.8,0c0.2-0.2,0.2-0.6,0-0.8L1.4,5z M5.8,5l4.1-4.1c0.2-0.2,0.2-0.6,0-0.8C9.6-0.1,9.3-0.1,9,0.2L4.6,4.6c-0.2,0.2-0.2,0.6,0,0.8L9,9.8c0.2,0.2,0.6,0.2,0.8,0s0.2-0.6,0-0.8L5.8,5z" />
                </svg>
              </div>
            );
          }
          else if (item === "btnNextFive") {
            return (
              <div key="btnNextFive" title={translate("pagination.nextFivePage")} class={classes.elEllipsis.value} onClick={handleNextFive}>
                <i class={classes.elEllipsisIcon.value}>•••</i>
                <svg class={classes.elEllipsisArrow.value} viewBox="0 0 10 10">
                  <path d="M8.6,5L4.6,0.9c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l4.5,4.4c0.2,0.2,0.2,0.6,0,0.8L5.4,9.8c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L8.6,5z M4.2,5L0.2,0.9c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l4.5,4.4c0.2,0.2,0.2,0.6,0,0.8L1,9.8c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L4.2,5z" />
                </svg>
              </div>
            );
          }
          else {
            const attributes = {
              key: `${item}`,
              title: `${item}`,
              class: {
                [`${classPrefix.value}-item`]: true,
                [`${classPrefix.value}-item-active`]: page.value === item
              },
              onClick: () => handleChangePage(item as number)
            };

            return (
              <div {...attributes}>{item}</div>
            );
          }
        });

        // 
        let pageSizer;

        if (props.showPageSizer) {
          pageSizer = (
            <div key="pageSizer" class={classes.elPageSizer.value}>
              <VuiSelect size={props.size} value={pageSize.value} onChange={handleChangePageSize}>
                {
                  props.pageSizeOptions.map(option => {
                    return (
                      <VuiOption key={option} value={option}>
                        {option} {translate("pagination.pageSize")}
                      </VuiOption>
                    );
                  })
                }
              </VuiSelect>
            </div>
          );
        }

        // 
        let pageJumper;

        if (props.showPageJumper) {
          pageJumper = (
            <div key={"elevator"} class={classes.elPageJumper.value}>
              <span>{translate("pagination.goto")}</span>
              <VuiInput
                size={props.size}
                value={pageJumperValue.value}
                onKeydown={handleKeydownPageJumper}
                onBlur={handleBlurPageJumper}
                onChange={handleChangePageJumper}
              />
              <span>{translate("pagination.page")}</span>
            </div>
          );
        }

        return (
          <div v-show={visible.value} class={classes.el.value}>
            {total}
            {btnPrev}
            {items}
            {btnNext}
            {pageSizer}
            {pageJumper}
          </div>
        );
      }
    };
  }
});