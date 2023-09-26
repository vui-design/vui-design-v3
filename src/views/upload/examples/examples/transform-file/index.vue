<template>
  <vui-example id="example-upload-transform-file" v-bind:code="code">
    <template v-slot:title>上传前转换文件</template>
    <template v-slot:description>
      <p>使用 <code>beforeUpload</code> 钩子函数转换上传的文件（例如添加水印）。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model:fileList="fileList"
        v-bind:beforeUpload="beforeUpload"
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

      const beforeUpload = (file: File) => {
        return new Promise(resolve => {
          const reader = new FileReader();

          reader.readAsDataURL(file);
          reader.onload = () => {
            const img: HTMLImageElement = document.createElement("img");

            img.src = reader.result as string;
            img.onload = () => {
              const canvas = document.createElement("canvas");

              canvas.width = img.naturalWidth;
              canvas.height = img.naturalHeight;

              const ctx = canvas.getContext("2d");

              ctx.drawImage(img, 0, 0);
              ctx.fillStyle = "red";
              ctx.textBaseline = "middle";
              ctx.font = "33px Arial";
              ctx.fillText("Vui Design", 20, 20);

              canvas.toBlob(resolve);
            };
          };
        });
      };

      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        beforeUpload,
        handleChange
      };
    }
  });
</script>