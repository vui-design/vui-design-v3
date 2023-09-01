<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-toggle />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleToggle from "./examples/toggle/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleToggle
    }
  });
</script>