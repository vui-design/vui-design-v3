import type { App, Plugin } from "vue";
import Skeleton from "./skeleton";
import SkeletonAvatar from "./skeleton-avatar";
import SkeletonTitle from "./skeleton-title";
import SkeletonParagraph from "./skeleton-paragraph";
import SkeletonInput from "./skeleton-input";
import SkeletonButton from "./skeleton-button";
import SkeletonImage from "./skeleton-image";

Skeleton.Avatar = SkeletonAvatar;
Skeleton.Title = SkeletonTitle;
Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Input = SkeletonInput;
Skeleton.Button = SkeletonButton;
Skeleton.Image = SkeletonImage;
Skeleton.install = function(app: App) {
  app.component(Skeleton.name, Skeleton);
  app.component(SkeletonAvatar.name, SkeletonAvatar);
  app.component(SkeletonTitle.name, SkeletonTitle);
  app.component(SkeletonParagraph.name, SkeletonParagraph);
  app.component(SkeletonInput.name, SkeletonInput);
  app.component(SkeletonButton.name, SkeletonButton);
  app.component(SkeletonImage.name, SkeletonImage);

  return app;
};

export type { SkeletonProps } from "./skeleton";
export type { SkeletonAvatarProps } from "./skeleton-avatar";
export type { SkeletonTitleProps } from "./skeleton-title";
export type { SkeletonParagraphProps } from "./skeleton-paragraph";
export type { SkeletonInputProps } from "./skeleton-input";
export type { SkeletonButtonProps } from "./skeleton-button";
export type { SkeletonImageProps } from "./skeleton-image";

export { createProps as createSkeletonProps } from "./skeleton";
export { createProps as createSkeletonAvatarProps } from "./skeleton-avatar";
export { createProps as createSkeletonTitleProps } from "./skeleton-title";
export { createProps as createSkeletonParagraphProps } from "./skeleton-paragraph";
export { createProps as createSkeletonInputProps } from "./skeleton-input";
export { createProps as createSkeletonButtonProps } from "./skeleton-button";
export { createProps as createSkeletonImageProps } from "./skeleton-image";

export { SkeletonAvatar, SkeletonTitle, SkeletonParagraph, SkeletonInput, SkeletonButton, SkeletonImage };
export default Skeleton as typeof Skeleton & Plugin & {
  readonly Avatar: typeof SkeletonAvatar;
  readonly Title: typeof SkeletonTitle;
  readonly Paragraph: typeof SkeletonParagraph;
  readonly Input: typeof SkeletonInput;
  readonly Button: typeof SkeletonButton;
  readonly Image: typeof SkeletonImage;
};