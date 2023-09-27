<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-trigger />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-control />
      <vui-example-placement />
    </vui-col>
  </vui-row>
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