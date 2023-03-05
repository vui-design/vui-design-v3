<template>
  <vui-example id="example-spin-fullscreen" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-spin-fullscreen">
        <vui-button type="primary" v-on:click="showSpin">全屏加载，3秒后关闭</vui-button>
        <vui-button outline v-on:click="showCustomSpin">自定义指示符</vui-button>
      </div>
    </template>
    <template v-slot:title>全屏加载</template>
    <template v-slot:description>
      <p>全屏加载方式，可以使用 <code>Vue</code> 的 <code>createElement</code> 函数自定义指示符，<a href="https://cn.vuejs.org/guide/extras/render-function.html" target="_blank">学习渲染函数 & JSX</a>。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";
  import { Icon, Spin } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const showSpin = () => {
        const spin = Spin.spinning("Loading...");

        setTimeout(() => spin.cancel(), 3000);
      };

      const showCustomSpin = () => {
        const spin = Spin.spinning({
          indicator() {
            const props = {
              type: "loading-spinner",
              style: "font-size: 34px;"
            };

            return h(Icon, props);
          },
          background: "rgba(0, 0, 0, 0.5)"
        });

        setTimeout(() => spin.cancel(), 3000);
      };

      return {
        code,
        showSpin,
        showCustomSpin
      };
    }
  });
</script>

<style>
  .example-spin-fullscreen .vui-button + .vui-button { margin-left:16px; }
</style>