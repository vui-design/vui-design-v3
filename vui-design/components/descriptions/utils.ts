import type { VNode, Component, Slots, CSSProperties } from "vue";
import type { Breakpoint, Screens, ScreenSizes } from "../../utils/responsive-observer";
import type { LabelAlign } from "./types";
import is from "../../utils/is";
import { breakpoints } from "../../utils/responsive-observer";
import { flatten } from "../../utils/vue";

const defaultColumns: number = 3;
const defaultScreenColumns: ScreenSizes = { xxxl: 3, xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };

export const getColumns = (
  columns: number | ScreenSizes,
  screens: Screens
) => {
  if (is.number(columns)) {
    return columns;
  }

  if (is.object(columns)) {
    for (let i = 0; i < breakpoints.length; i++) {
      const breakpoint: Breakpoint = breakpoints[i];

      if (screens[breakpoint] && is.number(columns[breakpoint])) {
        return columns[breakpoint] ?? defaultScreenColumns[breakpoint];
      }
    }
  }

  return defaultColumns;
};

export const getChildren = (
  children: VNode[] | undefined
) => {
  if (!children) {
    return [];
  }

  return flatten(children).filter(target => {
    return is.object(target.type) && (target.type as Component).name === "vui-description";
  });
};

export const getRows = (
  vnodes: VNode[] | undefined,
  columns: number
) => {
  const children = getChildren(vnodes);
  const rows: any[][] = [];
  let row: any[] = [];
  let spans = columns;

  children.forEach((node: VNode, index: number) => {
    const span: number = node.props?.span ?? 1;
    const isLast = index === children.length - 1;

    if (span >= spans || isLast) {
      row.push(getCol(node, isLast ? spans : span , spans));
      rows.push(row);

      row = [];
      spans = columns;
    }
    else if (span < spans) {
      row.push(getCol(node, span, spans));
      spans -= span;
    }
  });

  return rows;
};

export const getCol = (
  node: VNode,
  span: number,
  spans: number
) => {
  let col = {
    label: node.props?.label ?? (node.children as Slots)?.label?.(),
    span: span,
    labelStyle: node.props?.labelStyle,
    contentStyle: node.props?.contentStyle,
    children: (node.children as Slots)?.default?.()
  };

  if (span > spans) {
    col.span = spans;
    console.warn("[Vui Design][Descriptions]: Sum of column \"span\" in a line not match \"columns\" of descriptions.");
  }

  return col;
};

export const getLabelStyle = (
  inheritLabelStyle: CSSProperties | undefined,
  ownLabelStyle: CSSProperties | undefined,
  labelAlign?: LabelAlign
) => {
  let labelStyle: CSSProperties = {};

  if (labelAlign) {
    labelStyle.textAlign = labelAlign as any;
  }

  return [
    labelStyle,
    inheritLabelStyle as CSSProperties,
    ownLabelStyle as CSSProperties
  ];
};

export const getContentStyle = (
  inheritContentStyle: CSSProperties | undefined,
  ownContentStyle: CSSProperties | undefined
) => {
  return [
    inheritContentStyle as CSSProperties,
    ownContentStyle as CSSProperties
  ];
};

export default {
  getColumns,
  getChildren,
  getRows,
  getCol,
  getLabelStyle,
  getContentStyle
};