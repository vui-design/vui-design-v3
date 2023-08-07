<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-shape />
    <vui-example-size />
    <vui-example-ghost />
    <vui-example-icon />
    <vui-example-checkable />
    <vui-example-hot-tags />
    <vui-example-closable />
    <vui-example-control />
    <vui-example-colorful />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleShape from "./examples/shape/index.vue";
  import VuiExampleGhost from "./examples/ghost/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleClosable from "./examples/closable/index.vue";
  import VuiExampleControl from "./examples/control/index.vue";
  import VuiExampleCheckable from "./examples/checkable/index.vue";
  import VuiExampleHotTags from "./examples/hot-tags/index.vue";
  import VuiExampleColorful from "./examples/colorful/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleSize,
      VuiExampleShape,
      VuiExampleGhost,
      VuiExampleIcon,
      VuiExampleClosable,
      VuiExampleControl,
      VuiExampleCheckable,
      VuiExampleHotTags,
      VuiExampleColorful
    }
  });
</script>