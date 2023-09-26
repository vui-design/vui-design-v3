const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-bind:defaultFileList="defaultFileList"
    v-on:change="handleChange"
  />
</template>

<script lang="ts">
  import type { UploadFile } from "vui-design";
  import { defineComponent, ref } from "vue";

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
      const defaultFileList = ref<UploadFile[]>(uploadFileList);
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        console.log(newFileList);
      };

      return {
        defaultFileList,
        handleChange
      };
    }
  });
</script>
`;

export default code;