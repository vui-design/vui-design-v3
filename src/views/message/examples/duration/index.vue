<template>
  <vui-example id="example-message-duration" v-bind:code="code">
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showMessage">Customized display duration</vui-button>
    </template>
    <template v-slot:title>修改延时</template>
    <template v-slot:description>
      <p>自定义停留时长为 <code>10s</code>，默认为 <code>3s</code>。取消自动关闭只需将 <code>duration</code> 设为 <code>0</code> 即可。</p>
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
        Message.info("I will disappear in 10 seconds...", 10000);
      };

      return {
        code,
        showMessage
      };
    }
  });
</script>