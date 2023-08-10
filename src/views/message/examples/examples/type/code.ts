const code =
`<template>
  <div class="example-message-type">
    <vui-button type="info" ghost v-on:click="showInfoMessage">Info</vui-button>
    <vui-button type="warning" ghost v-on:click="showWarningMessage">Warning</vui-button>
    <vui-button type="success" ghost v-on:click="showSuccessMessage">Success</vui-button>
    <vui-button type="danger" ghost v-on:click="showErrorMessage">Error</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showInfoMessage = () => {
        Message.info("This is a info message");
      };
      const showWarningMessage = () => {
        Message.warning("This is a warning message");
      };
      const showSuccessMessage = () => {
        Message.success("This is a success message");
      };
      const showErrorMessage = () => {
        Message.error("This is a error message");
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
  .example-message-type .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;