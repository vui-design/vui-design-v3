<template>
  <div>
    <vui-example-simple />
    <vui-example-basic-usage />
    <vui-example-loading />
    <vui-example-load-more />
    <vui-example-vertical />
    <vui-example-grid />
    <vui-example-resposive />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleSimple from "./examples/simple/index.vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleLoadMore from "./examples/load-more/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleGrid from "./examples/grid/index.vue";
  import VuiExampleResposive from "./examples/resposive/index.vue";

  export default defineComponent({
    components: {
      VuiExampleSimple,
      VuiExampleBasicUsage,
      VuiExampleLoading,
      VuiExampleLoadMore,
      VuiExampleVertical,
      VuiExampleGrid,
      VuiExampleResposive
    }
  });
</script>