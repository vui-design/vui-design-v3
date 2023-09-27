<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-customized-content />
      <vui-example-trigger />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-placement />
      <vui-example-colorful />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleCustomizedContent from "./examples/customized-content/index.vue";
  import VuiExampleTrigger from "./examples/trigger/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleCustomizedContent,
      VuiExampleTrigger,
      VuiExamplePlacement,
      VuiExampleColorful
    }
  });
</script>