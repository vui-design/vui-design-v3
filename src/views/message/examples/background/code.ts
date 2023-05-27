const code =
`<template>
  <div class="example-message-background">
    <vui-button type="info" v-on:click="showInfoMessage">Info</vui-button>
    <vui-button type="warning" v-on:click="showWarningMessage">Warning</vui-button>
    <vui-button type="success" v-on:click="showSuccessMessage">Success</vui-button>
    <vui-button type="danger" v-on:click="showErrorMessage">Error</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showInfoMessage = () => {
        Message.info({
          content: "This is a info message",
          background: true
        });
      };
      const showWarningMessage = () => {
        Message.warning({
          content: "This is a warning message",
          background: true
        });
      };
      const showSuccessMessage = () => {
        Message.success({
          content: "This is a success message",
          background: true
        });
      };
      const showErrorMessage = () => {
        Message.error({
          content: "This is a error message",
          background: true
        });
      };

      return {
        showInfoMessage,
        showWarningMessage,
        showSuccessMessage,
        showErrorMessage
      };
    }
  });
</script>

<style>
  .example-message-background .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;