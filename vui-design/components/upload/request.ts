import type { Data } from "../../types";
import type { UploadRequestOptions } from "./types";

const getResponse = (xhr: XMLHttpRequest) =>  {
  const response = xhr.responseText || xhr.response;

  if (!response) {
    return response;
  }

  try {
    return JSON.parse(response);
  }
  catch(e) {
    return response;
  }
};

const getError = (action: string, xhr: XMLHttpRequest) => {
  let message;

  if (xhr.response) {
    message = `${xhr.response.error || xhr.response}`;
  }
  else if (xhr.responseText) {
    message = `${xhr.responseText}`;
  }
  else {
    message = `fail to post ${action} ${xhr.status}`;
  }

  return new Error(message);
};

export default (options: UploadRequestOptions) => {
  if (typeof XMLHttpRequest === "undefined") {
    return;
  }

  const xhr = new XMLHttpRequest();
  const data = new FormData();

  if (options.data) {
    Object.keys(options.data).forEach(key => {
      data.append(key, (options.data as Data)[key] as string);
    });
  }

  data.append(options.name, options.file, options.file.name);

  if (xhr.upload) {
    xhr.upload.onprogress = (e: ProgressEvent) => options.onProgress(e);
  }

  xhr.onload = (e: ProgressEvent) => {
    if (xhr.status >= 200 && xhr.status < 300) {
      options.onSuccess(getResponse(xhr));
    }
    else {
      options.onError(getError(options.action, xhr));
    }
  };

  xhr.onerror = (e: ProgressEvent) => {
    options.onError(e);
  };

  xhr.open("post", options.action, true);

  if (options.headers) {
    Object.keys(options.headers).forEach(key => {
      xhr.setRequestHeader(key, (options.headers as Data)[key] as string);
    });
  }

  if (options.withCredentials && "withCredentials" in xhr) {
    xhr.withCredentials = true;
  }

  xhr.send(data);

  return xhr;
};