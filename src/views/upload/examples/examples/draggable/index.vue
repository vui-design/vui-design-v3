<template>
  <vui-example id="example-upload-draggable" v-bind:code="code">
    <template v-slot:title>拖拽上传</template>
    <template v-slot:description>
      <p>把文件拖入指定区域完成上传，同样支持点击上传。设置 <code>multiple</code> 后，可以一次上传多个文件。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        v-model:fileList="fileList"
        v-on:change="handleChange"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        draggable
        multiple
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
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
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