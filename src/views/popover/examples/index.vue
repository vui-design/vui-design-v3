<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-trigger />
    <vui-example-control />
    <vui-example-placement />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleTrigger from "./examples/trigger/index.vue";
  import VuiExampleControl from "./examples/control/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExamplePlacement,
      VuiExampleTrigger,
      VuiExampleControl
    }
  });
</script>