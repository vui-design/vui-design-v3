<template>
  <vui-example id="example-message-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>基本用法，适用于简短的消息提示。</p>
    </template>
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showMessage">Normal message</vui-button>
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
      const showMessage = () => {
        Message.info("This is a normal message");
      };

      return {
        code,
        showMessage
      };
    }
  });
</script>