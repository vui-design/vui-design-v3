<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-overflow-count />
      <vui-example-text />
      <vui-example-dot />
      <vui-example-alone />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-offset />
      <vui-example-status />
      <vui-example-colorful />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOverflowCount from "./examples/overflow-count/index.vue";
  import VuiExampleText from "./examples/text/index.vue";
  import VuiExampleDot from "./examples/dot/index.vue";
  import VuiExampleAlone from "./examples/alone/index.vue";
  import VuiExampleOffset from "./examples/offset/index.vue";
  import VuiExampleStatus from "./examples/status/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleOverflowCount,
      VuiExampleText,
      VuiExampleDot,
      VuiExampleAlone,
      VuiExampleOffset,
      VuiExampleStatus,
      VuiExampleColorful
    }
  });
</script>