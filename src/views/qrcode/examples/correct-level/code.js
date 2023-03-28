const code = `
<template>
  <div class="example-qrcode-correct-level">
    <vui-radio-group type="button" v-model:value="correctLevel">
      <vui-radio v-bind:value="0">0</vui-radio>
      <vui-radio v-bind:value="1">1</vui-radio>
      <vui-radio v-bind:value="2">2</vui-radio>
      <vui-radio v-bind:value="3">3</vui-radio>
    </vui-radio-group>
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
  .example-qrcode-correct-level .vui-qrcode { margin-top:24px; }
</style>
`;

export default code;