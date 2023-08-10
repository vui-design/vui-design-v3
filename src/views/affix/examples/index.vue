<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-change />
    <vui-example-container />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleChange from "./examples/change/index.vue";
  import VuiExampleContainer from "./examples/container/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleChange,
      VuiExampleContainer
    }
  });
</script>