export type GetScrollContainer = () => Window | HTMLElement;

export interface Section {
  top: number;
  link: string;
};

export interface Anchor {
  link: string;
  addLink: (link: string) => void;
  removeLink: (link: string) => void;
  scrollTo: (link: string) => void;
  onClick: (e: MouseEvent, info: AnchorLink) => void;
};

export interface AnchorLink {
  href?: string;
  title?: string | number;
  target?: string;
};