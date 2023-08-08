<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-icon-and-unit />
    <vui-example-card />
    <vui-example-extra />
    <vui-example-countdown />
  </div>
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