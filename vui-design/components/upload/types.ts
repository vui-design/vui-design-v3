import type { Data } from "../../types";
import type { listTypes } from "./constants";

export type ListType = typeof listTypes[number];

export interface UploadFile {
  id?: string | number;
  name: string;
  url: string;
  type?: string;
  size?: number;
  lastModified?: number;
  webkitRelativePath?: string;
  status?: string;
  percentage?: number;
  progress?: ProgressEvent;
  response?: any;
  error?: Error | ProgressEvent;
  rawFile?: File;
};

export interface UploadRequest extends XMLHttpRequest {

};

export interface UploadRequestOptions {
  action: string;
  name: string;
  file: File;
  data?: Data;
  headers?: Data;
  withCredentials?: boolean;
  onProgress: (progress: ProgressEvent) => void;
  onSuccess: (response?: any) => void;
  onError: (error?: Error | ProgressEvent) => void;
};