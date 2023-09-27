<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-change />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-container />
    </vui-col>
  </vui-row>
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