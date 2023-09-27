<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-disabled />
      <vui-example-condition />
      <vui-example-state-value />
      <vui-example-controller />
      <vui-example-group />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-group-vertical />
      <vui-example-group-options />
      <vui-example-check-all />
      <vui-example-button />
      <vui-example-size />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleCondition from "./examples/condition/index.vue";
  import VuiExampleStateValue from "./examples/state-value/index.vue";
  import VuiExampleController from "./examples/controller/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";
  import VuiExampleGroupVertical from "./examples/group-vertical/index.vue";
  import VuiExampleGroupOptions from "./examples/group-options/index.vue";
  import VuiExampleCheckAll from "./examples/check-all/index.vue";
  import VuiExampleButton from "./examples/button/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleDisabled,
      VuiExampleCondition,
      VuiExampleStateValue,
      VuiExampleController,
      VuiExampleGroup,
      VuiExampleGroupVertical,
      VuiExampleGroupOptions,
      VuiExampleCheckAll,
      VuiExampleButton,
      VuiExampleSize
    }
  });
</script>