<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-type />
    <vui-example-loading />
    <vui-example-closable />
    <vui-example-duration />
    <vui-example-background />
    <vui-example-update />
    <vui-example-more />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleLoading from "./examples/loading/index.vue";
  import VuiExampleClosable from "./examples/closable/index.vue";
  import VuiExampleDuration from "./examples/duration/index.vue";
  import VuiExampleBackground from "./examples/background/index.vue";
  import VuiExampleUpdate from "./examples/update/index.vue";
  import VuiExampleMore from "./examples/more/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleType,
      VuiExampleLoading,
      VuiExampleClosable,
      VuiExampleDuration,
      VuiExampleBackground,
      VuiExampleUpdate,
      VuiExampleMore
    }
  });
</script>