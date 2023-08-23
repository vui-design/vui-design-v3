<template>
  <vui-example id="example-timeline-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单定义一个时间轴的用法。</p>
    </template>
    <template v-slot:demo>
      <vui-timeline>
        <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
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