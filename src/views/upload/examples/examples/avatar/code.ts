const code =
`<template>
  <vui-upload
    listType="picture-card"
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-bind:showFileList="false"
    v-bind:beforeUpload="beforeUpload"
    v-on:change="handleChange"
  >
    <template v-if="avatar">
      <vui-avatar v-bind:src="avatar" shape="square" v-bind:size="90" />
    </template>
  </vui-upload>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";

  const getBase64 = (image: File, callback: (url: string | ArrayBuffer) => void) => {
    let reader = new FileReader();

    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(image);
  };

  export default defineComponent({
    setup() {
      const avatar = ref<string>("");

      const beforeUpload = (file: File) => {
        let isJPG = file.type === "image/jpeg";

        if (!isJPG) {
          Message.error("You can only upload JPG file!");
        }

        let isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          Message.error("Image must smaller than 2MB!");
        }

        return isJPG && isLt2M;
      };

      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        if (newFile.status === "success") {
          getBase64(newFile.rawFile, url => avatar.value = url as string);
        }
      };

      return {
        avatar,
        beforeUpload,
        handleChange
      };
    }
  });
</script>
`;

export default code;