<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-digit />
      <vui-example-formatter />
      <vui-example-bordered />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-size />
      <vui-example-clearable />
      <vui-example-disabled />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleDigit from "./examples/digit/index.vue";
  import VuiExampleFormatter from "./examples/formatter/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleDigit,
      VuiExampleFormatter,
      VuiExampleBordered,
      VuiExampleSize,
      VuiExampleClearable,
      VuiExampleDisabled
    }
  });
</script>