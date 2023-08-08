<template>
  <vui-example id="example-qrcode-color" v-bind:code="code">
    <template v-slot:title>自定义颜色</template>
    <template v-slot:description>
      <p>自定义二维码的背景色、前景色或三角颜色。</p>
    </template>
    <template v-slot:demo>
      <vui-qrcode
        value="https://vui-design.github.io/vui-design-doc/"
        background="#fafafa"
        foreground="#2d8cf0"
        pdground="#52c41a"
      />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>