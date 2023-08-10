<template>
  <div>
    <vui-example-info />
    <vui-example-warning />
    <vui-example-success />
    <vui-example-error />
    <vui-example-comingsoon />
    <vui-example-403 />
    <vui-example-404 />
    <vui-example-500 />
    <vui-example-custom-icon />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleInfo from "./examples/info/index.vue";
  import VuiExampleWarning from "./examples/warning/index.vue";
  import VuiExampleSuccess from "./examples/success/index.vue";
  import VuiExampleError from "./examples/error/index.vue";
  import VuiExampleComingsoon from "./examples/comingsoon/index.vue";
  import VuiExample403 from "./examples/403/index.vue";
  import VuiExample404 from "./examples/404/index.vue";
  import VuiExample500 from "./examples/500/index.vue";
  import VuiExampleCustomIcon from "./examples/custom-icon/index.vue";

  export default defineComponent({
    components: {
      VuiExampleInfo,
      VuiExampleWarning,
      VuiExampleSuccess,
      VuiExampleError,
      VuiExampleComingsoon,
      VuiExample403,
      VuiExample404,
      VuiExample500,
      VuiExampleCustomIcon
    }
  });
</script>