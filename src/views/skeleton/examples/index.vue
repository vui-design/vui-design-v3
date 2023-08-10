<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-complex />
    <vui-example-animated />
    <vui-example-element />
    <vui-example-children />
    <vui-example-list />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleComplex from "./examples/complex/index.vue";
  import VuiExampleAnimated from "./examples/animated/index.vue";
  import VuiExampleElement from "./examples/element/index.vue";
  import VuiExampleChildren from "./examples/children/index.vue";
  import VuiExampleList from "./examples/list/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleComplex,
      VuiExampleAnimated,
      VuiExampleElement,
      VuiExampleChildren,
      VuiExampleList
    }
  });
</script>