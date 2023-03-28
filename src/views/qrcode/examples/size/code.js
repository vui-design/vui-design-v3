const code = `
<template>
  <div class="example-qrcode-size">
    <vui-button-group>
      <vui-button icon="minus" v-on:click="handleSmaller">Smaller</vui-button>
      <vui-button icon="plus" v-on:click="handleLarger">Larger</vui-button>
    </vui-button-group>
    <vui-qrcode v-bind:size="size" value="https://vui-design.github.io/vui-design-doc/" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<number>(160);

      const handleSmaller = () => size.value = size.value - 10;
      const handleLarger = () => size.value = size.value + 10;

      return {
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
`;

export default code;