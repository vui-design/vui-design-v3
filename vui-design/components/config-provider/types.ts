import type { Size, GetPopupContainer, GetScrollContainer, Authorize } from "../../types";
import type { Lang } from "../../locale/types";

export interface ConfigProvider {
  classPrefix?: string;
  size?: Size;
  getPopupContainer?: GetPopupContainer;
  getScrollContainer?: GetScrollContainer;
  authorize?: Authorize;
  locale?: Lang;
};