<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-icon />
    <vui-example-local />
    <vui-example-trigger-condition />
    <vui-example-promise />
    <vui-example-placement />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleLocal from "./examples/local/index.vue";
  import VuiExampleTriggerCondition from "./examples/trigger-condition/index.vue";
  import VuiExamplePromise from "./examples/promise/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleIcon,
      VuiExampleLocal,
      VuiExampleTriggerCondition,
      VuiExamplePromise,
      VuiExamplePlacement
    }
  });
</script>