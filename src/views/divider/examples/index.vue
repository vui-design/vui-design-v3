<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-basic-usage />
      <vui-example-vertical />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-with-text />
      <vui-example-plain />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleVertical from "./examples/vertical/index.vue";
  import VuiExampleWithText from "./examples/with-text/index.vue";
  import VuiExamplePlain from "./examples/plain/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleVertical,
      VuiExampleWithText,
      VuiExamplePlain
    }
  });
</script>