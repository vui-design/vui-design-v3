<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-bordered />
      <vui-example-size />
      <vui-example-show-count />
      <vui-example-clearable />
      <vui-example-addon />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-affix />
      <vui-example-disabled />
      <vui-example-tooltip />
      <vui-example-password />
      <vui-example-search />
      <vui-example-group />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleShowCount from "./examples/show-count/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleAddon from "./examples/addon/index.vue";
  import VuiExampleAffix from "./examples/affix/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleTooltip from "./examples/tooltip/index.vue";
  import VuiExamplePassword from "./examples/password/index.vue";
  import VuiExampleSearch from "./examples/search/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleBordered,
      VuiExampleSize,
      VuiExampleShowCount,
      VuiExampleClearable,
      VuiExampleAddon,
      VuiExampleAffix,
      VuiExampleDisabled,
      VuiExampleTooltip,
      VuiExamplePassword,
      VuiExampleSearch,
      VuiExampleGroup
    }
  });
</script>