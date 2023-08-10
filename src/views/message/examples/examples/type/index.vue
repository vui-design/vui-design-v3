<template>
  <vui-example id="example-message-type" v-bind:code="code">
    <template v-slot:title>提示类型</template>
    <template v-slot:description>
      <p>不同的提示类型：<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>。</p>
    </template>
    <template v-slot:demo>
      <div class="example-message-type">
        <vui-button type="info" ghost v-on:click="showInfoMessage">Info</vui-button>
        <vui-button type="warning" ghost v-on:click="showWarningMessage">Warning</vui-button>
        <vui-button type="success" ghost v-on:click="showSuccessMessage">Success</vui-button>
        <vui-button type="danger" ghost v-on:click="showErrorMessage">Error</vui-button>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
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