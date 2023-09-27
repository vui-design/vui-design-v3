<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-icon />
      <vui-example-separator />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-dropdown />
      <vui-example-link />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleLink from "./examples/link/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleDropdown from "./examples/dropdown/index.vue";
  import VuiExampleSeparator from "./examples/separator/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleLink,
      VuiExampleIcon,
      VuiExampleDropdown,
      VuiExampleSeparator
    }
  });
</script>