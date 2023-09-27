<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-size />
      <vui-example-inside />
      <vui-example-nested />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-delay />
      <vui-example-indicator />
      <vui-example-message />
      <vui-example-fullscreen />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleInside from "./examples/inside/index.vue";
  import VuiExampleNested from "./examples/nested/index.vue";
  import VuiExampleDelay from "./examples/delay/index.vue";
  import VuiExampleIndicator from "./examples/indicator/index.vue";
  import VuiExampleMessage from "./examples/message/index.vue";
  import VuiExampleFullscreen from "./examples/fullscreen/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleSize,
      VuiExampleInside,
      VuiExampleNested,
      VuiExampleDelay,
      VuiExampleIndicator,
      VuiExampleMessage,
      VuiExampleFullscreen
    }
  });
</script>