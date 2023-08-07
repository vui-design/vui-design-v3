<template>
  <div>
    <vui-example-type />
    <vui-example-icon />
    <vui-example-size />
    <vui-example-underline />
    <vui-example-loading />
    <vui-example-disabled />
    <vui-example-link />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleUnderline from "./examples/underline/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleLink from "./examples/link/index.vue";

  export default defineComponent({
    components: {
      VuiExampleType,
      VuiExampleIcon,
      VuiExampleSize,
      VuiExampleUnderline,
      VuiExampleLoading,
      VuiExampleDisabled,
      VuiExampleLink
    }
  });
</script>