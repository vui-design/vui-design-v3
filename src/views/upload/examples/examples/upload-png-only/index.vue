<template>
  <vui-example id="example-upload-upload-png-only" v-bind:code="code">
    <template v-slot:title>只上传 png 图片</template>
    <template v-slot:description>
      <p>使用 <code>beforeUpload</code> 钩子函数实现上传文件的格式与大小限制。</p>
    </template>
    <template v-slot:demo>
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
  </vui-example>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
        fileList,
        beforeUpload,
        handleChange
      };
    }
  });
</script>