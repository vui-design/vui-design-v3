<template>
  <vui-example id="example-upload-manually" v-bind:code="code">
    <template v-slot:title>手动上传</template>
    <template v-slot:description>
      <p>禁用 <code>autoUpload</code> 属性，通过手动点击按钮上传。</p>
    </template>
    <template v-slot:demo>
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
      const uploadRef = ref();
      const fileList = ref<UploadFile[]>([]);

      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };
      const handleUpload = () => {
        uploadRef.value.upload();
      };

      return {
        code,
        uploadRef,
        fileList,
        handleChange,
        handleUpload
      };
    }
  });
</script>