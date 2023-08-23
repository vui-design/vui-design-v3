<template>
  <vui-example id="example-timeline-pending" v-bind:code="code">
    <template v-slot:title>幽灵节点</template>
    <template v-slot:description>
      <p>通过 <code>pending</code> 属性来标记最后一个为幽灵节点，表示还未完成。</p>
    </template>
    <template v-slot:demo>
      <vui-timeline pending>
        <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Recording...</vui-timeline-item>
      </vui-timeline>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>