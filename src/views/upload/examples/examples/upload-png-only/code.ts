const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-model:fileList="fileList"
    v-bind:beforeUpload="beforeUpload"
    v-on:change="handleChange"
  >
    <template v-slot:extra>
      <div style="color: #bfbfbf;">仅支持上传 png 格式且小于 2M 的图片</div>
    </template>
  </vui-upload>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const fileList = ref<UploadFile[]>([]);

      const beforeUpload = (file: File) => {
        let isPNG = file.type === "image/png";

        if (!isPNG) {
          Message.error("You can only upload PNG file!");
        }

        let isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          Message.error("Image must smaller than 2MB!");
        }

        return isPNG && isLt2M;
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