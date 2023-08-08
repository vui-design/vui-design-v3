<template>
  <div>
    <vui-example-basic-usage />
    <vui-example-type />
    <vui-example-badge />
    <vui-example-dynamic />
    <vui-example-group />
    <vui-example-responsive />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleBasicUsage from "./examples/basic-usage/index.vue";
  import VuiExampleType from "./examples/type/index.vue";
  import VuiExampleBadge from "./examples/badge/index.vue";
  import VuiExampleDynamic from "./examples/dynamic/index.vue";
  import VuiExampleGroup from "./examples/group/index.vue";
  import VuiExampleResponsive from "./examples/responsive/index.vue";

  export default defineComponent({
    components: {
      VuiExampleBasicUsage,
      VuiExampleType,
      VuiExampleBadge,
      VuiExampleDynamic,
      VuiExampleGroup,
      VuiExampleResponsive
    }
  });
</script>