<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-vertical />
      <vui-example-justify />
      <vui-example-align />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-divider />
      <vui-example-size />
      <vui-example-customize />
      <vui-example-wrap />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleJustify from "./examples/justify/index.vue";
  import VuiExampleAlign from "./examples/align/index.vue";
  import VuiExampleDivider from "./examples/divider/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleCustomize from "./examples/customize/index.vue";
  import VuiExampleWrap from "./examples/wrap/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleVertical,
      VuiExampleJustify,
      VuiExampleAlign,
      VuiExampleDivider,
      VuiExampleSize,
      VuiExampleCustomize,
      VuiExampleWrap
    }
  });
</script>