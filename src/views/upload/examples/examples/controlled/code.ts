const code =
`<template>
  <vui-upload
    action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
    v-bind:fileList="fileList"
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
    }
  ];

  export default defineComponent({
    setup() {
      const fileList = ref<UploadFile[]>(uploadFileList);
      const handleChange = (newFileList: UploadFile[], newFile: UploadFile) => {
        let restFileList = [...newFileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        restFileList = restFileList.slice(-2);

        // 2. read from response and show file link
        restFileList = restFileList.map(file => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }

          return file;
        });

        fileList.value = restFileList;
      };

      return {
        fileList,
        handleChange
      };
    }
  });
</script>
`;

export default code;