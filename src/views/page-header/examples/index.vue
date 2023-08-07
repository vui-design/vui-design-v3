<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-ghost />
    <vui-example-breadcrumb />
    <vui-example-more />
    <vui-example-content />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleGhost from "./examples/ghost/index.vue";
  import VuiExampleBreadcrumb from "./examples/breadcrumb/index.vue";
  import VuiExampleMore from "./examples/more/index.vue";
  import VuiExampleContent from "./examples/content/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleGhost,
      VuiExampleBreadcrumb,
      VuiExampleMore,
      VuiExampleContent
    }
  });
</script>