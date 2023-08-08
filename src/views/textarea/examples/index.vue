<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-bordered />
    <vui-example-show-count />
    <vui-example-autosize />
    <vui-example-resizable />
    <vui-example-clearable />
    <vui-example-disabled />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleShowCount from "./examples/show-count/index.vue";
  import VuiExampleAutosize from "./examples/autosize/index.vue";
  import VuiExampleResizable from "./examples/resizable/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleBordered,
      VuiExampleShowCount,
      VuiExampleAutosize,
      VuiExampleResizable,
      VuiExampleClearable,
      VuiExampleDisabled
    }
  });
</script>