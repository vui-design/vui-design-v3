const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-model:fileList="fileList"
    v-bind:multiple="multiple"
    v-on:change="handleChange"
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const fileList = ref<UploadFile[]>([]);
      const multiple = ref<boolean>(true);
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        fileList,
        multiple,
        handleChange
      };
    }
  });
</script>
`;

export default code;