const code =
`<template>
  <vui-popconfirm
    title="Are you sure delete this task?"
    v-on:cancel="handleCancel"
    v-on:ok="handleOk"
  >
    <template v-slot:icon>
      <vui-icon type="warning-filled" style="color: #f00;" />
    </template>
    <a href="javascript:;">Delete</a>
  </vui-popconfirm>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const handleCancel = () => {
        console.log("点击了取消");
      };
      const handleOk = () => {
        console.log("点击了确认");
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