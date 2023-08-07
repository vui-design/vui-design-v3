<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-vertical />
    <vui-example-header-sider-first />
    <vui-example-header-sider-second />
    <vui-example-sider />
    <vui-example-custom-trigger />
    <vui-example-responsive />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleHeaderSiderFirst from "./examples/header-sider-first/index.vue";
  import VuiExampleHeaderSiderSecond from "./examples/header-sider-second/index.vue";
  import VuiExampleSider from "./examples/sider/index.vue";
  import VuiExampleCustomTrigger from "./examples/custom-trigger/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleVertical,
      VuiExampleHeaderSiderFirst,
      VuiExampleHeaderSiderSecond,
      VuiExampleSider,
      VuiExampleCustomTrigger,
      VuiExampleResponsive
    }
  });
</script>