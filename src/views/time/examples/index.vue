<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-type />
    <vui-example-interval />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleInterval from "./examples/interval/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleType,
      VuiExampleInterval
    }
  });
</script>