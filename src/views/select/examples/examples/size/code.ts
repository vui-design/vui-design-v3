const code =
`<template>
  <div class="example-select-size">
    <vui-segments v-model:activeKey="size">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <vui-space block direction="vertical" v-bind:gutter="24">
      <vui-select v-model:value="value1" v-bind:size="size" style="width: 200px;" placeholder="Please select">
        <vui-option value="new york">New York</vui-option>
        <vui-option value="london">London</vui-option>
        <vui-option value="sydney">Sydney</vui-option>
        <vui-option value="ottawa">Ottawa</vui-option>
        <vui-option value="paris">Paris</vui-option>
        <vui-option value="canberra">Canberra</vui-option>
      </vui-select>
      <vui-select v-model:value="value2" v-bind:size="size" multiple placeholder="Please select">
        <vui-option value="new york">New York</vui-option>
        <vui-option value="london">London</vui-option>
        <vui-option value="sydney">Sydney</vui-option>
        <vui-option value="ottawa">Ottawa</vui-option>
        <vui-option value="paris">Paris</vui-option>
        <vui-option value="canberra">Canberra</vui-option>
      </vui-select>
    </vui-space>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("medium");
      const value1 = ref<string>("london");
      const value2 = ref<string[]>(["new york", "sydney"]);

      return {
        size,
        value1,
        value2
      };
    }
  });
</script>

<style>
  .example-select-size .vui-space { margin-top:32px; }
</style>
`;

export default code;