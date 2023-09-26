<template>
  <vui-example id="example-upload-multiple" v-bind:code="code">
    <template v-slot:title>批量上传</template>
    <template v-slot:description>
      <p>设置 <code>multiple="true"</code> 开启多文件批量上传（按住 <code>ctrl</code> 可选择多个文件）。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model:fileList="fileList"
        v-bind:multiple="multiple"
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
      const multiple = ref<boolean>(true);
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        multiple,
        handleChange
      };
    }
  });
</script>