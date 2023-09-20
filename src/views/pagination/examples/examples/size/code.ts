const code =
`<template>
  <div class="example-pagination-size">
    <vui-segments v-model:activeKey="size">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <vui-pagination v-bind:size="size" v-bind:total="50" />
    <vui-pagination v-bind:size="size" v-bind:total="50" showPageSizer showPageElevator />
    <vui-pagination v-bind:size="size" v-bind:total="50" showTotal />
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
  .example-pagination-size .vui-segments + .vui-pagination { margin-top:32px; }
  .example-pagination-size .vui-pagination + .vui-pagination { margin-top:24px; }
</style>
`;

export default code;