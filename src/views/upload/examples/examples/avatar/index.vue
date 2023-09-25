<template>
  <vui-example id="example-upload-avatar" v-bind:code="code">
    <template v-slot:title>用户头像</template>
    <template v-slot:description>
      <p>点击上传用户头像，并使用 <code>beforeUpload</code> 限制用户上传的图片格式和大小。<code>beforeUpload</code> 的返回值可以是一个 <code>Promise</code> 以支持异步处理，如服务端校验等</p>
    </template>
    <template v-slot:demo>
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
  </vui-example>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";;
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  function getBase64(image, callback) {
    let reader = new FileReader();

    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(image);
  }

  export default defineComponent({
    components: {
      VuiExample
    },
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
          getBase64(newFile.rawFile, url => avatar.value = url);
        }
      };

      return {
        code,
        avatar,
        beforeUpload,
        handleChange
      };
    }
  });
</script>