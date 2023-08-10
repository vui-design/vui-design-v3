<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-type />
    <vui-example-duration />
    <vui-example-placement />
    <vui-example-update />
    <vui-example-more />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleDuration from "./examples/duration/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleUpdate from "./examples/update/index.vue";
  import VuiExampleMore from "./examples/more/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleType,
      VuiExampleDuration,
      VuiExamplePlacement,
      VuiExampleUpdate,
      VuiExampleMore
    }
  });
</script>