import type { App, Plugin } from "vue";
import Upload from "./upload";

Upload.install = function(app: App) {
  app.component(Upload.name, Upload);

  return app;
};

export type { UploadProps } from "./upload";
export type { UploadFile, UploadRequest, UploadRequestOptions } from "./types";

export { createProps as createUploadProps } from "./upload";

export default Upload as typeof Upload & Plugin;