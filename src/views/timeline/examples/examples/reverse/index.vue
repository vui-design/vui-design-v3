<template>
  <vui-example id="example-timeline-reverse" v-bind:code="code">
    <template v-slot:title>控制排序的时间轴</template>
    <template v-slot:description>
      <p>利用 <code>reverse</code> 属性控制节点排序，为 <code>false</code> 时按正序排列，为 <code>true</code> 时按倒序排列。</p>
    </template>
    <template v-slot:demo>
      <div>
        <vui-timeline v-bind:reverse="reverse">
          <vui-timeline-item>Create a services site 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Solve initial network problems 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Technical testing 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
          <vui-timeline-item>Recording...</vui-timeline-item>
        </vui-timeline>
        <vui-button type="primary" style="margin-top: 24px;" v-on:click="handleClick">Toggle Reverse</vui-button>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const reverse = ref<boolean>(false);
      const handleClick = () => reverse.value = !reverse.value;

      return {
        code,
        reverse,
        handleClick
      };
    }
  });
</script>