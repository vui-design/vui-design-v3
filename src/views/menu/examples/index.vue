<template>
  <div>
    <vui-example-horizontal />
    <vui-example-vertical />
    <vui-example-inline />
    <vui-example-inline-collapsed />
    <vui-example-color />
    <vui-example-accordion />
    <vui-example-switch-mode />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleHorizontal from "./examples/horizontal/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleInline from "./examples/inline/index.vue";
  import VuiExampleInlineCollapsed from "./examples/inline-collapsed/index.vue";
  import VuiExampleColor from "./examples/color/index.vue";
  import VuiExampleAccordion from "./examples/accordion/index.vue";
  import VuiExampleSwitchMode from "./examples/switch-mode/index.vue";

  export default defineComponent({
    components: {
      VuiExampleHorizontal,
      VuiExampleVertical,
      VuiExampleInline,
      VuiExampleInlineCollapsed,
      VuiExampleColor,
      VuiExampleAccordion,
      VuiExampleSwitchMode
    }
  });
</script>