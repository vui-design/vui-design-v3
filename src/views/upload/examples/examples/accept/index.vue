<template>
  <vui-example id="example-upload-accept" v-bind:code="code">
    <template v-slot:title>允许上传的文件类型</template>
    <template v-slot:description>
      <p>使用 <code>accept</code> 属性控制允许上传的文件类型，详见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#accept" target="_blank">HTML标准</a>。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model:fileList="fileList"
        v-bind:accept="accept"
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
      const accept = ref<string>("image/jpeg, image/png");
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        accept,
        handleChange
      };
    }
  });
</script>