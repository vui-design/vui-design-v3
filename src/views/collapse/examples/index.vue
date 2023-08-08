<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-accordion />
    <vui-example-borderless />
    <vui-example-ghost />
    <vui-example-extra />
    <vui-example-arrowless />
    <vui-example-arrow-align />
    <vui-example-disabled />
    <vui-example-nested />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleAccordion from "./examples/accordion/index.vue";
  import VuiExampleBorderless from "./examples/borderless/index.vue";
  import VuiExampleGhost from "./examples/ghost/index.vue";
  import VuiExampleExtra from "./examples/extra/index.vue";
  import VuiExampleArrowless from "./examples/arrowless/index.vue";
  import VuiExampleArrowAlign from "./examples/arrow-align/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleNested from "./examples/nested/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleAccordion,
      VuiExampleBorderless,
      VuiExampleGhost,
      VuiExampleExtra,
      VuiExampleArrowless,
      VuiExampleArrowAlign,
      VuiExampleDisabled,
      VuiExampleNested
    }
  });
</script>