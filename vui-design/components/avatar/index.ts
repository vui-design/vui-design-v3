import type { App, Plugin } from "vue";
import Avatar from "./avatar";
import AvatarGroup from "./avatar-group";

Avatar.Group = AvatarGroup;
Avatar.install = function(app: App) {
  app.component(Avatar.name, Avatar);
  app.component(AvatarGroup.name, AvatarGroup);

  return app;
};

export type { AvatarProps } from "./avatar";
export type { AvatarGroupProps } from "./avatar-group";

export { createProps as createAvatarProps } from "./avatar";
export { createProps as createAvatarGroupProps } from "./avatar-group";

export { AvatarGroup };
export default Avatar as typeof Avatar & Plugin & {
  readonly Group: typeof AvatarGroup;
};