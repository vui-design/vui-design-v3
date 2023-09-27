const code =
`<template>
  <div class="example-input-number-size">
    <vui-segments v-model:activeKey="size">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <br />
    <vui-input-number v-model:value="value" v-bind:size="size" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("medium");
      const value = ref<number>(1);

      return {
        size,
        value
      };
    }
  });
</script>

<style>
  .example-input-number-size .vui-input-number { margin-top:24px; }
</style>
`;

export default code;