const code =
`<template>
  <vui-space>
    <vui-button type="primary" v-on:click="showInfo">消息</vui-button>
    <vui-button type="warning" v-on:click="showWarning">警告</vui-button>
    <vui-button type="success" v-on:click="showSuccess">成功</vui-button>
    <vui-button type="danger" v-on:click="showError">失败</vui-button>
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Modal } from "vui-design";

  export default defineComponent({
    setup() {
      const showInfo = () => {
        Modal.info({
          title: "This is a info message",
          description: "Some descriptions...Some descriptions..."
        });
      };
      const showWarning = () => {
        Modal.warning({
          title: "This is a warning message",
          description: "Some descriptions...Some descriptions..."
        });
      };
      const showSuccess = () => {
        Modal.success({
          title: "This is a success message",
          description: "Some descriptions...Some descriptions..."
        });
      };
      const showError = () => {
        Modal.error({
          title: "This is a error message",
          description: "Some descriptions...Some descriptions..."
        });
      };

      return {
        showInfo,
        showWarning,
        showSuccess,
        showError
      };
    }
  });
</script>
`;

export default code;