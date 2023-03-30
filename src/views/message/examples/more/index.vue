<template>
  <vui-example id="example-message-more" v-bind:code="code">
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showMessage">Render Function</vui-button>
    </template>
    <template v-slot:title>更多内容</template>
    <template v-slot:description>
      <p>可以将选项 <code>content</code> 设置为一个函数，您所需要做的就是在函数内部返回提示内容即可。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const showMessage = () => {
        Message.info(() => h("div", null, "I was returned by a function."));
      };

      return {
        code,
        showMessage
      };
    }
  });
</script>