<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-placement />
      <vui-example-headless-and-footless />
      <vui-example-button-props />
      <vui-example-hide-close-button />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-promise />
      <vui-example-customized-footer />
      <vui-example-multi-level />
      <vui-example-get-popup-container />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleHeadlessAndFootless from "./examples/headless-and-footless/index.vue";
  import VuiExampleButtonProps from "./examples/button-props/index.vue";
  import VuiExampleHideCloseButton from "./examples/hide-close-button/index.vue";
  import VuiExamplePromise from "./examples/promise/index.vue";
  import VuiExampleCustomizedFooter from "./examples/customized-footer/index.vue";
  import VuiExampleMultiLevel from "./examples/multi-level/index.vue";
  import VuiExampleGetPopupContainer from "./examples/get-popup-container/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExamplePlacement,
      VuiExampleHeadlessAndFootless,
      VuiExampleButtonProps,
      VuiExampleHideCloseButton,
      VuiExamplePromise,
      VuiExampleCustomizedFooter,
      VuiExampleMultiLevel,
      VuiExampleGetPopupContainer
    }
  });
</script>