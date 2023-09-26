<template>
  <vui-example id="example-upload-picture" v-bind:code="code">
    <template v-slot:title>图片列表样式</template>
    <template v-slot:description>
      <p>上传文件为图片，可展示本地缩略图。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        v-model:fileList="fileList"
        listType="picture"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-on:preview="handlePreview"
        v-on:remove="handleRemove"
        v-on:change="handleChange"
      />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const fileList = ref<UploadFile[]>([]);

      const handlePreview = (newFile: UploadFile) => {
        window.open(newFile.url, "_blank");
      };
      const handleRemove = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(`${newFile.name} has removed!`);
      };
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        handlePreview,
        handleRemove,
        handleChange
      };
    }
  });
</script>