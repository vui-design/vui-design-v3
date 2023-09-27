<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-type />
      <vui-example-description />
      <vui-example-closable />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-close-text />
      <vui-example-icon />
      <vui-example-banner />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleDescription from "./examples/description/index.vue";
  import VuiExampleClosable from "./examples/closable/index.vue";
  import VuiExampleCloseText from "./examples/close-text/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleBanner from "./examples/banner/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleType,
      VuiExampleDescription,
      VuiExampleClosable,
      VuiExampleCloseText,
      VuiExampleIcon,
      VuiExampleBanner
    }
  });
</script>