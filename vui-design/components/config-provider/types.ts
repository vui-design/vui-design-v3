import type { Size, GetPopupContainer, GetScrollContainer } from "../../types";
import type { Lang } from "../../locale/types";

export interface ConfigProvider {
  classPrefix?: string;
  size?: Size;
  reverseTrendColor?: boolean;
  getPopupContainer?: GetPopupContainer;
  getScrollContainer?: GetScrollContainer;
  locale?: Lang;
};