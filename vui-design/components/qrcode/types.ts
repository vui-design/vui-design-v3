import type { correctLevels, statuses } from "./constants";

export type Status = typeof statuses[number];
export type CorrectLevel = typeof correctLevels[number];

export interface HTMLALinkElement extends HTMLElement {
  href?: string;
  download?: string
};