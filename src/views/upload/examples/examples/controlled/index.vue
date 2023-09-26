<template>
  <vui-example id="example-upload-controlled" v-bind:code="code">
    <template v-slot:title>完全受控的上传列表</template>
    <template v-slot:description>
      <p>使用 <code>fileList</code> 对列表进行完全控制，可以实现各种自定义功能，以下演示两种情况：</p>
      <ul>
        <li>上传列表数量的限制；</li>
        <li>读取远程路径并显示链接。</li>
      </ul>
    </template>
    <template v-slot:demo>
      <vui-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-bind:fileList="fileList"
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

  const uploadFileList: UploadFile[] = [
    {
      id: "81797bbf-8de1-514f-bfa2-3541400e8cf8",
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
        code,
        fileList,
        handleChange
      };
    }
  });
</script>