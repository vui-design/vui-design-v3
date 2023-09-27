<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-options />
      <vui-example-block />
      <vui-example-size />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-icon />
      <vui-example-disabled />
      <vui-example-dynamic />
      <vui-example-custom />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOptions from "./examples/options/index.vue";
  import VuiExampleBlock from "./examples/block/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleDynamic from "./examples/dynamic/index.vue";
  import VuiExampleCustom from "./examples/custom/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleOptions,
      VuiExampleBlock,
      VuiExampleSize,
      VuiExampleIcon,
      VuiExampleDisabled,
      VuiExampleDynamic,
      VuiExampleCustom
    }
  });
</script>