<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-precision />
      <vui-example-label />
      <vui-example-color />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-reverse-color />
      <vui-example-placeholder />
      <vui-example-ratio />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePrecision from "./examples/precision/index.vue";
  import VuiExampleLabel from "./examples/label/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleReverseColor from "./examples/reverse-color/index.vue";
  import VuiExamplePlaceholder from "./examples/placeholder/index.vue";
  import VuiExampleRatio from "./examples/ratio/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExamplePrecision,
      VuiExampleLabel,
      VuiExampleColor,
      VuiExampleReverseColor,
      VuiExamplePlaceholder,
      VuiExampleRatio
    }
  });
</script>