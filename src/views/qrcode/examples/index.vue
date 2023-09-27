<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-no-border />
      <vui-example-size />
      <vui-example-image />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-correct-level />
      <vui-example-color />
      <vui-example-status />
      <vui-example-download />
      <vui-example-popover />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleNoBorder from "./examples/no-border/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleImage from "./examples/image/index.vue";
  import VuiExampleCorrectLevel from "./examples/correct-level/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleStatus from "./examples/status/index.vue";
  import VuiExampleDownload from "./examples/download/index.vue";
  import VuiExamplePopover from "./examples/popover/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleNoBorder,
      VuiExampleSize,
      VuiExampleImage,
      VuiExampleCorrectLevel,
      VuiExampleColor,
      VuiExampleStatus,
      VuiExampleDownload,
      VuiExamplePopover
    }
  });
</script>