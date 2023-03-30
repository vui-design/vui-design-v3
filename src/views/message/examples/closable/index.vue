<template>
  <vui-example id="example-message-closable" v-bind:code="code">
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showMessage">Closable</vui-button>
    </template>
    <template v-slot:title>可关闭</template>
    <template v-slot:description>
      <p>将参数设置为一个对象，并指定 <code>closable</code> 为 <code>true</code> 后可以手动关闭提示，完整参数详见下述 API 文档。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const showMessage = () => {
        Message.info({
          content: "This is a message that can be closed manually",
          closable: true,
          duration: 10000
        });
      };

      return {
        code,
        showMessage
      };
    }
  });
</script>