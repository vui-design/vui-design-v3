<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-more />
    <vui-example-total />
    <vui-example-flip-button />
    <vui-example-page-size />
    <vui-example-goto />
    <vui-example-simple />
    <vui-example-size />
    <vui-example-align />
    <vui-example-hide-on-single-page />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleMore from "./examples/more/index.vue";
  import VuiExampleTotal from "./examples/total/index.vue";
  import VuiExampleFlipButton from "./examples/flip-button/index.vue";
  import VuiExamplePageSize from "./examples/page-size/index.vue";
  import VuiExampleGoto from "./examples/goto/index.vue";
  import VuiExampleSimple from "./examples/simple/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleAlign from "./examples/align/index.vue";
  import VuiExampleHideOnSinglePage from "./examples/hide-on-single-page/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleMore,
      VuiExampleTotal,
      VuiExampleFlipButton,
      VuiExamplePageSize,
      VuiExampleGoto,
      VuiExampleSimple,
      VuiExampleSize,
      VuiExampleAlign,
      VuiExampleHideOnSinglePage
    }
  });
</script>