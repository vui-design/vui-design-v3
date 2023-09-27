const code =
`<template>
  <div class="example-input-size">
    <vui-segments v-model:activeKey="size">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <vui-input v-bind:size="size" placeholder="Enter something..." />
    <vui-input v-bind:size="size" affixAfter="calendar" placeholder="Enter something..." />
    <vui-input v-bind:size="size" addonAfter="@qq.com" placeholder="Enter something..." />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("medium");

      return {
        size
      };
    }
  });
</script>

<style>
  .example-input-size .vui-segments + .vui-input { margin-top:24px; }
  .example-input-size .vui-input + .vui-input { margin-top:24px; }
</style>
`;

export default code;