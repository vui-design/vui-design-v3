<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-bordered />
    <vui-example-vertical />
    <vui-example-vertical-bordered />
    <vui-example-size />
    <vui-example-responsive />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleBordered from "./examples/bordered/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleVerticalBordered from "./examples/vertical-bordered/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleBordered,
      VuiExampleVertical,
      VuiExampleVerticalBordered,
      VuiExampleSize,
      VuiExampleResponsive
    }
  });
</script>