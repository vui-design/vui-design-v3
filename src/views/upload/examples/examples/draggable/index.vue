<template>
  <vui-example id="example-upload-draggable" v-bind:code="code">
    <template v-slot:title>拖拽上传</template>
    <template v-slot:description>
      <p>把文件拖入指定区域完成上传，同样支持点击上传；设置 <code>multiple</code> 后，可以一次上传多个文件。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model:fileList="fileList"
        v-bind:multiple="multiple"
        v-bind:draggable="draggable"
        v-on:change="handleChange"
      >
        <template v-slot:extra>Only JPG / PNG files can be uploaded, and no more than 500kb</template>
      </vui-upload>
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
      const multiple = ref<boolean>(true);
      const draggable = ref<boolean>(true);
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        multiple,
        draggable,
        handleChange
      };
    }
  });
</script>