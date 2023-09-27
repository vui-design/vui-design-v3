<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-open-in-new-window />
      <vui-example-static />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-customize-highlight />
      <vui-example-offset />
      <vui-example-click />
      <vui-example-change />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOpenInNewWindow from "./examples/open-in-new-window/index.vue";
  import VuiExampleStatic from "./examples/static/index.vue";
  import VuiExampleCustomizeHighlight from "./examples/customize-highlight/index.vue";
  import VuiExampleOffset from "./examples/offset/index.vue";
  import VuiExampleClick from "./examples/click/index.vue";
  import VuiExampleChange from "./examples/change/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleOpenInNewWindow,
      VuiExampleStatic,
      VuiExampleCustomizeHighlight,
      VuiExampleOffset,
      VuiExampleClick,
      VuiExampleChange
    }
  });
</script>