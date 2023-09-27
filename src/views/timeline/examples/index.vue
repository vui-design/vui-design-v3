<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-reverse />
      <vui-example-pending />
      <vui-example-color />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-custom />
      <vui-example-alternate />
      <vui-example-right />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleReverse from "./examples/reverse/index.vue";
  import VuiExamplePending from "./examples/pending/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleCustom from "./examples/custom/index.vue";
  import VuiExampleAlternate from "./examples/alternate/index.vue";
  import VuiExampleRight from "./examples/right/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleReverse,
      VuiExamplePending,
      VuiExampleColor,
      VuiExampleCustom,
      VuiExampleAlternate,
      VuiExampleRight
    }
  });
</script>