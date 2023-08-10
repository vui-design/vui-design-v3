<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-headless-and-footless />
    <vui-example-button-props />
    <vui-example-hide-close-button />
    <vui-example-width />
    <vui-example-position />
    <vui-example-fullscreen />
    <vui-example-draggable />
    <vui-example-promise />
    <vui-example-customized-footer />
    <vui-example-confirm />
    <vui-example-infomation />
    <vui-example-update-and-close />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleHeadlessAndFootless from "./examples/headless-and-footless/index.vue";
  import VuiExampleButtonProps from "./examples/button-props/index.vue";
  import VuiExampleHideCloseButton from "./examples/hide-close-button/index.vue";
  import VuiExampleWidth from "./examples/width/index.vue";
  import VuiExamplePosition from "./examples/position/index.vue";
  import VuiExampleFullscreen from "./examples/fullscreen/index.vue";
  import VuiExampleDraggable from "./examples/draggable/index.vue";
  import VuiExamplePromise from "./examples/promise/index.vue";
  import VuiExampleCustomizedFooter from "./examples/customized-footer/index.vue";
  import VuiExampleConfirm from "./examples/confirm/index.vue";
  import VuiExampleInfomation from "./examples/infomation/index.vue";
  import VuiExampleUpdateAndClose from "./examples/update-and-close/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleHeadlessAndFootless,
      VuiExampleButtonProps,
      VuiExampleHideCloseButton,
      VuiExampleWidth,
      VuiExamplePosition,
      VuiExampleFullscreen,
      VuiExampleDraggable,
      VuiExamplePromise,
      VuiExampleCustomizedFooter,
      VuiExampleConfirm,
      VuiExampleInfomation,
      VuiExampleUpdateAndClose
    }
  });
</script>