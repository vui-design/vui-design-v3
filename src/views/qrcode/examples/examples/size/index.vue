<template>
  <vui-example id="example-qrcode-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>自定义二维码的尺寸，单位为 <code>px</code>，只允许生成正方形二维码。</p>
    </template>
    <template v-slot:demo>
      <div class="example-qrcode-size">
        <vui-button-group>
          <vui-button icon="minus" v-on:click="handleSmaller">Smaller</vui-button>
          <vui-button icon="plus" v-on:click="handleLarger">Larger</vui-button>
        </vui-button-group>
        <vui-qrcode v-bind:size="size" value="https://vui-design.github.io/vui-design-doc/" />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const size = ref<number>(160);

      const handleSmaller = () => size.value = size.value - 10;
      const handleLarger = () => size.value = size.value + 10;

      return {
        code,
        size,
        handleSmaller,
        handleLarger
      };
    }
  });
</script>

<style>
  .example-qrcode-size .vui-qrcode { margin-top:24px; }
</style>