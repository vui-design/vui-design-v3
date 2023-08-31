<template>
  <div>
    <vui-example-basic-usage />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage
    }
  });
</script>