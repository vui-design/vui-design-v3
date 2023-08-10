<template>
  <vui-example id="example-message-loading" v-bind:code="code">
    <template v-slot:title>加载中</template>
    <template v-slot:description>
      <p>进行全局 loading，异步自行移除。</p>
    </template>
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showLoadingMessage">Loading</vui-button>
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
      const showLoadingMessage = () => {
        const loading = Message.loading("Action in progress...", 0);

        setTimeout(() => {
          loading.close();
          Message.success("Action succeeded");
        }, 3000);
      };

      return {
        code,
        showLoadingMessage
      };
    }
  });
</script>