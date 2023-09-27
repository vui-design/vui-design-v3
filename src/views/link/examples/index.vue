<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-type />
      <vui-example-icon />
      <vui-example-size />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-underline />
      <vui-example-loading />
      <vui-example-disabled />
      <vui-example-link />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleIcon from "./examples/icon/index.vue";
  import VuiExampleSize from "./examples/size/index.vue";
  import VuiExampleUnderline from "./examples/underline/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleDisabled from "./examples/disabled/index.vue";
  import VuiExampleLink from "./examples/link/index.vue";

  export default defineComponent({
    components: {
      VuiExampleType,
      VuiExampleIcon,
      VuiExampleSize,
      VuiExampleUnderline,
      VuiExampleLoading,
      VuiExampleDisabled,
      VuiExampleLink
    }
  });
</script>