<template>
  <vui-example id="example-upload-picture-card" v-bind:code="code">
    <template v-slot:title>照片墙</template>
    <template v-slot:description>
      <p>用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        v-model:fileList="fileList"
        listType="picture-card"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-bind:showSelection="fileList.length < 4"
        v-on:preview="handlePreview"
        v-on:remove="handleRemove"
        v-on:change="handleChange"
      />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";;
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