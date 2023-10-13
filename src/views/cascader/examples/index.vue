<template>
  <vui-row v-bind:gutter="16">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-value />
      <vui-example-size />
      <vui-example-expand-trigger />
      <vui-example-change-on-select />
      <vui-example-disabled-option />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-bordered />
      <vui-example-searchable />
      <vui-example-clearable />
      <vui-example-auto-width />
      <vui-example-formatter />
      <vui-example-option-keys />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleValue from "./examples/value/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleExpandTrigger from "./examples/expand-trigger/index.vue";
  import VuiExampleChangeOnSelect from "./examples/change-on-select/index.vue";
  import VuiExampleDisabledOption from "./examples/disabled-option/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleSearchable from "./examples/searchable/index.vue";
  import VuiExampleClearable from "./examples/clearable/index.vue";
  import VuiExampleAutoWidth from "./examples/auto-width/index.vue";
  import VuiExampleFormatter from "./examples/formatter/index.vue";
  import VuiExampleOptionKeys from "./examples/option-keys/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleValue,
      VuiExampleSize,
      VuiExampleExpandTrigger,
      VuiExampleChangeOnSelect,
      VuiExampleDisabledOption,
      VuiExampleBordered,
      VuiExampleSearchable,
      VuiExampleClearable,
      VuiExampleAutoWidth,
      VuiExampleFormatter,
      VuiExampleOptionKeys
    }
  });
</script>