<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-type />
      <vui-example-interval />
    </vui-col>
  </vui-row>
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