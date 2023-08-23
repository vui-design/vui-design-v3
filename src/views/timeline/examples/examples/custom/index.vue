<template>
  <vui-example id="example-timeline-custom" v-bind:code="code">
    <template v-slot:title>自定义时间轴点</template>
    <template v-slot:description>
      <p>接受一个 <code>slot</code> 来自定义时间轴点，比如一个图标。</p>
    </template>
    <template v-slot:demo>
      <vui-timeline pending>
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