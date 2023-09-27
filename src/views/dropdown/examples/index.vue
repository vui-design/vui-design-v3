<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-other-elements />
      <vui-example-trigger />
      <vui-example-contextmenu />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-event />
      <vui-example-cascaded />
      <vui-example-placement />
      <vui-example-button />
      <vui-example-button-loading />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleOtherElements from "./examples/other-elements/index.vue";
  import VuiExampleTrigger from "./examples/trigger/index.vue";
  import VuiExampleContextmenu from "./examples/contextmenu/index.vue";
  import VuiExampleEvent from "./examples/event/index.vue";
  import VuiExampleCascaded from "./examples/cascaded/index.vue";
  import VuiExamplePlacement from "./examples/placement/index.vue";
  import VuiExampleButton from "./examples/button/index.vue";
  import VuiExampleButtonLoading from "./examples/button-loading/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleOtherElements,
      VuiExampleTrigger,
      VuiExampleContextmenu,
      VuiExampleEvent,
      VuiExampleCascaded,
      VuiExamplePlacement,
      VuiExampleButton,
      VuiExampleButtonLoading
    }
  });
</script>