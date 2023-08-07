<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-gutter />
    <vui-example-offset />
    <vui-example-sort />
    <vui-example-justify />
    <vui-example-align />
    <vui-example-order />
    <vui-example-flex-stretch />
    <vui-example-responsive />
    <vui-example-responsive-more />
    <vui-example-playground />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleGutter from "./examples/gutter/index.vue";
  import VuiExampleOffset from "./examples/offset/index.vue";
  import VuiExampleSort from "./examples/sort/index.vue";
  import VuiExampleJustify from "./examples/justify/index.vue";
  import VuiExampleAlign from "./examples/align/index.vue";
  import VuiExampleOrder from "./examples/order/index.vue";
  import VuiExampleFlexStretch from "./examples/flex-stretch/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";
  import VuiExampleResponsiveMore from "./examples/responsive-more/index.vue";
  import VuiExamplePlayground from "./examples/playground/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleGutter,
      VuiExampleOffset,
      VuiExampleSort,
      VuiExampleJustify,
      VuiExampleAlign,
      VuiExampleOrder,
      VuiExampleFlexStretch,
      VuiExampleResponsive,
      VuiExampleResponsiveMore,
      VuiExamplePlayground
    }
  });
</script>