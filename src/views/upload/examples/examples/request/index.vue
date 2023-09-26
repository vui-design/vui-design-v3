<template>
  <vui-example id="example-upload-request" v-bind:code="code">
    <template v-slot:title>自定义上传请求</template>
    <template v-slot:description>
      <p>使用 <code>request</code> 属性实现自定义上传请求。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model:fileList="fileList"
        v-bind:request="request"
        v-on:change="handleChange"
      />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import type { UploadFile, UploadRequest, UploadRequestOptions } from "vui-design";
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

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

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const fileList = ref<UploadFile[]>([]);

      const request: UploadRequest = (options: UploadRequestOptions) => {
        const xhr = new XMLHttpRequest();
        const data = new FormData();

        if (options.data) {
          Object.keys(options.data).forEach(key => {
            data.append(key, options.data[key] as string);
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
            xhr.setRequestHeader(key, options.headers[key] as string);
          });
        }

        if (options.withCredentials && "withCredentials" in xhr) {
          xhr.withCredentials = true;
        }

        xhr.send(data);

        return xhr;
      };

      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        request,
        handleChange
      };
    }
  });
</script>