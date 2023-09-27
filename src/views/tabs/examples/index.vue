<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-card />
      <vui-example-size />
      <vui-example-icon />
      <vui-example-custom-title />
      <vui-example-disabled />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-addable />
      <vui-example-closable />
      <vui-example-editable />
      <vui-example-extra />
      <vui-example-custom-add-trigger />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleCard from "./examples/card/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleCustomTitle from "./examples/custom-title/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleAddable from "./examples/addable/index.vue";
  import VuiExampleClosable from "./examples/closable/index.vue";
  import VuiExampleEditable from "./examples/editable/index.vue";
  import VuiExampleExtra from "./examples/extra/index.vue";
  import VuiExampleCustomAddTrigger from "./examples/custom-add-trigger/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleCard,
      VuiExampleSize,
      VuiExampleIcon,
      VuiExampleCustomTitle,
      VuiExampleDisabled,
      VuiExampleAddable,
      VuiExampleClosable,
      VuiExampleEditable,
      VuiExampleExtra,
      VuiExampleCustomAddTrigger
    }
  });
</script>