<template>
  <vui-example id="example-upload-before-remove" v-bind:code="code">
    <template v-slot:title>移除前校验</template>
    <template v-slot:description>
      <p>钩子函数 <code>beforeRemove</code> 会在每一个文件被移除之前执行；如果返回 <code>false</code> 或者 <code>Promise.reject</code>， 那么将会取消当前的移除操作。</p>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model:fileList="fileList"
        v-bind:beforeRemove="beforeRemove"
        v-on:change="handleChange"
      />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import { Modal } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const uploadFileList: UploadFile[] = [
    {
      id: "81797bbf-8de1-514f-bfa2-3541400e8cf8",
      name: "jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      status: "success",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      id: "3c95c1df-5884-228f-357b-fa4859621228",
      name: "jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      status: "success",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const fileList = ref<UploadFile[]>(uploadFileList);

      const beforeRemove = (file: UploadFile) => {
        return new Promise((resolve, reject) => {
          Modal.confirm({
            title: "Do you want to delete this file?",
            description: "Some descriptions...",
            onCancel: () => reject(),
            onOk: () => resolve(true)
          });
        });
      };

      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        code,
        fileList,
        beforeRemove,
        handleChange
      };
    }
  });
</script>