<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-no-description />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-customize />
    </vui-col>
  </vui-row>
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