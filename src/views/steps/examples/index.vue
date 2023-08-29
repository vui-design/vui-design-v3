<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-vertical />
    <vui-example-size />
    <vui-example-error />
    <vui-example-icon />
    <vui-example-dot />
    <vui-example-customized-dot />





    <vui-example-navigation />
    <vui-example-clickable />
    <vui-example-control />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleError from "./examples/error/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleDot from "./examples/dot/index.vue";
  import VuiExampleCustomizedDot from "./examples/customized-dot/index.vue";
  import VuiExampleNavigation from "./examples/navigation/index.vue";
  import VuiExampleClickable from "./examples/clickable/index.vue";
  import VuiExampleControl from "./examples/control/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleVertical,
      VuiExampleSize,
      VuiExampleError,
      VuiExampleIcon,
      VuiExampleDot,
      VuiExampleCustomizedDot,
      VuiExampleNavigation,
      VuiExampleClickable,
      VuiExampleControl
    }
  });
</script>