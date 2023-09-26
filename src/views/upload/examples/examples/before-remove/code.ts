const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-model:fileList="fileList"
    v-bind:beforeRemove="beforeRemove"
    v-on:change="handleChange"
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";
  import { Modal } from "vui-design";

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
        fileList,
        beforeRemove,
        handleChange
      };
    }
  });
</script>
`;

export default code;