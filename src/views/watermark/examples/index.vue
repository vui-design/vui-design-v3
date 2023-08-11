<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-multi-line />
    <vui-example-image />
    <vui-example-custom />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleMultiLine from "./examples/multi-line/index.vue";
  import VuiExampleImage from "./examples/image/index.vue";
  import VuiExampleCustom from "./examples/custom/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleMultiLine,
      VuiExampleImage,
      VuiExampleCustom
    }
  });
</script>