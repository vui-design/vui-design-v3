<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-placement />
    <vui-example-type />
    <vui-example-colorful />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExamplePlacement,
      VuiExampleType,
      VuiExampleColorful
    }
  });
</script>