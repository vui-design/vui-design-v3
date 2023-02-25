const code =
`<template>
  <vui-popconfirm
    title="Are you sure delete this task?"
    cancelText="No"
    okText="Yes"
    v-on:cancel="handleCancel"
    v-on:ok="handleOk"
  >
    <a href="javascript:;">Delete</a>
  </vui-popconfirm>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const handleCancel = () => {
        console.log("Clicked on No");
      };
      const handleOk = () => {
        console.log("Clicked on Yes");
      };

      return {
        handleCancel,
        handleOk
      };
    }
  });
</script>
`;

export default code;