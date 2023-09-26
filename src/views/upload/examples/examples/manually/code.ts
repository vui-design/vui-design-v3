const code =
`<template>
  <vui-upload
    ref="uploadRef"
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-model:fileList="fileList"
    v-bind:autoUpload="false"
  >
    <vui-button icon="plus">选择文件</vui-button>
    <template v-slot:extra>
      <vui-button v-bind:disabled="fileList.length === 0" v-on:click="handleUpload">开始上传</vui-button>
    </template>
  </vui-upload>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const uploadRef = ref();
      const fileList = ref<UploadFile[]>([]);

      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };
      const handleUpload = () => {
        uploadRef.value.upload();
      };

      return {
        uploadRef,
        fileList,
        handleChange,
        handleUpload
      };
    }
  });
</script>
`;

export default code;