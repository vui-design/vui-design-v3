const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-model:fileList="fileList"
    v-bind:beforeUpload="beforeUpload"
    v-on:change="handleChange"
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";

  export default defineComponent({
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
        fileList,
        beforeUpload,
        handleChange
      };
    }
  });
</script>
`;

export default code;