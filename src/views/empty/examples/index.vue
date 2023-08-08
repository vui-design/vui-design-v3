<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-no-description />
    <vui-example-customize />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleNoDescription from "./examples/no-description/index.vue";
  import VuiExampleCustomize from "./examples/customize/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleNoDescription,
      VuiExampleCustomize
    }
  });
</script>