<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-custom />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleCustom from "./examples/custom/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleCustom
    }
  });
</script>