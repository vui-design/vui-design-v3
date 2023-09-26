const code =
`<template>
  <vui-upload
    v-model:fileList="fileList"
    listType="picture"
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-on:preview="handlePreview"
    v-on:remove="handleRemove"
    v-on:change="handleChange"
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const fileList = ref<UploadFile[]>([]);

      const handlePreview = (newFile: UploadFile) => {
        window.open(newFile.url, "_blank");
      };
      const handleRemove = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(\`\$\{newFile.name\} has removed!\`);
      };
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        fileList,
        handlePreview,
        handleRemove,
        handleChange
      };
    }
  });
</script>
`;

export default code;