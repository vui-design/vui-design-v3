const code =
`<template>
  <vui-upload
    v-model:fileList="fileList"
    v-on:change="handleChange"
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    draggable
    multiple
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";;
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const fileList = ref<UploadFile[]>([]);
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        fileList,
        handleChange
      };
    }
  });
</script>

<style>
  .example-upload-draggable-button { line-height:1; }
  .example-upload-draggable-button i { color:#2d8cf0; font-size:48px; }
  .example-upload-draggable-button h4 { margin:24px 0 0 0; color:#595959; font-size:16px; }
  .example-upload-draggable-button p { margin:16px 0 0 0; color:#8c8c8c; font-size:12px; }
</style>
`;

export default code;