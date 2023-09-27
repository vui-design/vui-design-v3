<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-type />
      <vui-example-size />
      <vui-example-text />
      <vui-example-state-value />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-color />
      <vui-example-loading />
      <vui-example-disabled />
      <vui-example-condition />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleText from "./examples/text/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleStateValue from "./examples/state-value/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleCondition from "./examples/condition/index.vue";

  export default defineComponent({
    components: {
      VuiExampleType,
      VuiExampleSize,
      VuiExampleText,
      VuiExampleLoading,
      VuiExampleDisabled,
      VuiExampleStateValue,
      VuiExampleColor,
      VuiExampleCondition
    }
  });
</script>