<template>
  <vui-example id="example-timeline-right" v-bind:code="code">
    <template v-slot:title>右侧时间轴点</template>
    <template v-slot:description>
      <p>时间轴点可以在内容的右边。</p>
    </template>
    <template v-slot:demo>
      <vui-timeline mode="right" pending>
        <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
        <vui-timeline-item color="red">
          <template v-slot:dot>
            <vui-icon type="time" v-bind:size="16" />
          </template>
          Solve initial network problems 2018-01-01
        </vui-timeline-item>
        <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
        <vui-timeline-item color="green">Network problems being solved 2018-01-01</vui-timeline-item>
        <vui-timeline-item>
          <template v-slot:dot>
            <vui-icon type="loading" v-bind:size="16" />
          </template>
          Recording...
        </vui-timeline-item>
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