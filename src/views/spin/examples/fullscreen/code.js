const code =
`<template>
  <div class="example-spin-fullscreen">
    <vui-button type="primary" v-on:click="showSpin">全屏加载，3秒后关闭</vui-button>
    <vui-button outline v-on:click="showCustomSpin">自定义指示符</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";
  import { Icon, Spin } from "vui-design";

  export default defineComponent({

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
        showSpin,
        showCustomSpin
      };
    }
  });
</script>

<style>
  .example-spin-fullscreen .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;