<template>
  <vui-row v-bind:gutter="24">
    <vui-col v-bind:span="12">
      <vui-example-line />
      <vui-example-line-small />
      <vui-example-circle />
      <vui-example-circle-small />
      <vui-example-circle-micro />
      <vui-example-dashboard />
    </vui-col>
    <vui-col v-bind:span="12">
      <vui-example-dynamic />
      <vui-example-segment />
      <vui-example-formatter />
      <vui-example-stroke-color />
      <vui-example-stroke-linecap />
      <vui-example-steps />
    </vui-col>
  </vui-row>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExampleLine from "./examples/line/index.vue";
  import VuiExampleLineSmall from "./examples/line-small/index.vue";
  import VuiExampleCircle from "./examples/circle/index.vue";
  import VuiExampleCircleSmall from "./examples/circle-small/index.vue";
  import VuiExampleCircleMicro from "./examples/circle-micro/index.vue";
  import VuiExampleDashboard from "./examples/dashboard/index.vue";
  import VuiExampleDynamic from "./examples/dynamic/index.vue";
  import VuiExampleSegment from "./examples/segment/index.vue";
  import VuiExampleFormatter from "./examples/formatter/index.vue";
  import VuiExampleStrokeColor from "./examples/stroke-color/index.vue";
  import VuiExampleStrokeLinecap from "./examples/stroke-linecap/index.vue";
  import VuiExampleSteps from "./examples/steps/index.vue";

  export default defineComponent({
    components: {
      VuiExampleLine,
      VuiExampleLineSmall,
      VuiExampleCircle,
      VuiExampleCircleSmall,
      VuiExampleCircleMicro,
      VuiExampleDashboard,
      VuiExampleDynamic,
      VuiExampleSegment,
      VuiExampleFormatter,
      VuiExampleStrokeColor,
      VuiExampleStrokeLinecap,
      VuiExampleSteps
    }
  });
</script>