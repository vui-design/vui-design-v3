<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-multiple />
      <vui-example-size />
      <vui-example-searchable />
      <vui-example-remote-search />
      <vui-example-users />
      <vui-example-bordered />
      <vui-example-clearable />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-disabled />
      <vui-example-group />
      <vui-example-coordinate />
      <vui-example-backfill-option-prop />
      <vui-example-max-tag-count />
      <vui-example-hide-selected-options />
      <vui-example-big-data />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleMultiple from "./examples/multiple/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleSearchable from "./examples/searchable/index.vue";
  import VuiExampleRemoteSearch from "./examples/remote-search/index.vue";
  import VuiExampleUsers from "./examples/users/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";
  import VuiExampleCoordinate from "./examples/coordinate/index.vue";
  import VuiExampleBackfillOptionProp from "./examples/backfill-option-prop/index.vue";
  import VuiExampleMaxTagCount from "./examples/max-tag-count/index.vue";
  import VuiExampleHideSelectedOptions from "./examples/hide-selected-options/index.vue";
  import VuiExampleBigData from "./examples/big-data/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleMultiple,
      VuiExampleSize,
      VuiExampleSearchable,
      VuiExampleRemoteSearch,
      VuiExampleUsers,
      VuiExampleBordered,
      VuiExampleClearable,
      VuiExampleDisabled,
      VuiExampleGroup,
      VuiExampleCoordinate,
      VuiExampleBackfillOptionProp,
      VuiExampleMaxTagCount,
      VuiExampleHideSelectedOptions,
      VuiExampleBigData
    }
  });
</script>