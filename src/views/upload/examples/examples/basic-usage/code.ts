const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-model:fileList="fileList"
    v-on:select="handleSelect"
    v-on:progress="handleProgress"
    v-on:success="handleSuccess"
    v-on:error="handleError"
    v-on:change="handleChange"
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const fileList = ref<UploadFile[]>([]);

      const handleSelect = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(\`\$\{newFile.name\} ready!\`);
      };
      const handleProgress = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(\`\$\{newFile.name\} uploaded \$\{newFile.percentage\}%!\`);
      };
      const handleSuccess = (newFileList: UploadFile[], newFile: UploadFile) => {
        Message.success(\`\$\{newFile.name\} uploaded successfully!\`);
      };
      const handleError = (newFileList: UploadFile[], newFile: UploadFile) => {
        Message.error(\`\$\{newFile.name\} upload failed!\`);
      };
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        fileList,
        handleSelect,
        handleProgress,
        handleSuccess,
        handleError,
        handleChange
      };
    }
  });
</script>
`;

export default code;