const code = `
<template>
  <div class="example-qrcode-correct-level">
    <vui-segments v-model:activeKey="correctLevel">
      <vui-segments-item v-bind:key="0">0</vui-segments-item>
      <vui-segments-item v-bind:key="1">1</vui-segments-item>
      <vui-segments-item v-bind:key="2">2</vui-segments-item>
      <vui-segments-item v-bind:key="3">3</vui-segments-item>
    </vui-segments>
    <vui-qrcode
      v-bind:correctLevel="correctLevel"
      value="https://vui-design.github.io/vui-design-doc/"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const correctLevel = ref<number>(3);

      return {
        correctLevel
      };
    }
  });
</script>

<style>
  .example-qrcode-correct-level .vui-segments + .vui-qrcode { margin-top:16px; }
</style>
`;

export default code;