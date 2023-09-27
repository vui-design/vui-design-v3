<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-icon-and-unit />
      <vui-example-card />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-extra />
      <vui-example-countdown />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleExtra from "./examples/extra/index.vue";
  import VuiExampleIconAndUnit from "./examples/icon-and-unit/index.vue";
  import VuiExampleCard from "./examples/card/index.vue";
  import VuiExampleCountdown from "./examples/countdown/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleExtra,
      VuiExampleIconAndUnit,
      VuiExampleCard,
      VuiExampleCountdown
    }
  });
</script>