<template>
  <vui-example id="example-timeline-color" v-bind:code="code">
    <template v-slot:title>轴点颜色</template>
    <template v-slot:description>
      <p>轴点颜色，灰色表示未完成或失效状态，蓝色表示正在进行或其他默认状态，黄色表示警告状态，绿色用于已完成、成功状态，红色则表示错误或失败状态。</p>
      <p>如果预设值不能满足你的需求，可以设置为具体的颜色值。</p>
    </template>
    <template v-slot:demo>
      <vui-timeline pending>
        <vui-timeline-item color="red">Create a services site 2018-01-01</vui-timeline-item>
        <vui-timeline-item color="green">Solve initial network problems 2018-01-01</vui-timeline-item>
        <vui-timeline-item color="yellow">Technical testing 2018-01-01</vui-timeline-item>
        <vui-timeline-item>Network problems being solved 2018-01-01</vui-timeline-item>
        <vui-timeline-item color="#722ed1">Purple</vui-timeline-item>
        <vui-timeline-item color="gray">Recording...</vui-timeline-item>
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