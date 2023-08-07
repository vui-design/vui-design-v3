<template>
  <div>
    <vui-example-type />
    <vui-example-ghost />
    <vui-example-block />
    <vui-example-icon-and-shape />
    <vui-example-size />
    <vui-example-loading />
    <vui-example-disabled />
    <vui-example-link />
    <vui-example-group />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleGhost from "./examples/ghost/index.vue";
  import VuiExampleBlock from "./examples/block/index.vue";
  import VuiExampleIconAndShape from "./examples/icon-and-shape/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleLink from "./examples/link/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";

  export default defineComponent({
    components: {
      VuiExampleType,
      VuiExampleGhost,
      VuiExampleBlock,
      VuiExampleIconAndShape,
      VuiExampleSize,
      VuiExampleLoading,
      VuiExampleDisabled,
      VuiExampleLink,
      VuiExampleGroup
    }
  });
</script>