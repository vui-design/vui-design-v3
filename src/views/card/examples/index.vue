<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-simple />
    <vui-example-no-border />
    <vui-example-shadow />
    <vui-example-loading />
    <vui-example-grid />
    <vui-example-flexible-content />
    <vui-example-inner />
    <vui-example-in-column />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleSimple from "./examples/simple/index.vue";
  import VuiExampleNoBorder from "./examples/no-border/index.vue";
  import VuiExampleShadow from "./examples/shadow/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleGrid from "./examples/grid/index.vue";
  import VuiExampleFlexibleContent from "./examples/flexible-content/index.vue";
  import VuiExampleInner from "./examples/inner/index.vue";
  import VuiExampleInColumn from "./examples/in-column/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleSimple,
      VuiExampleNoBorder,
      VuiExampleShadow,
      VuiExampleLoading,
      VuiExampleGrid,
      VuiExampleFlexibleContent,
      VuiExampleInner,
      VuiExampleInColumn
    }
  });
</script>