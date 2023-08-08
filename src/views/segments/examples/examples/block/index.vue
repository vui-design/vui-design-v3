<template>
  <vui-example id="example-segments-block" v-bind:code="code">
    <template v-slot:title>Block 分段选择器</template>
    <template v-slot:description>
      <p>添加 <code>block</code> 属性使其宽度撑满父元素。</p>
    </template>
    <template v-slot:demo>
      <vui-segments block>
        <vui-segments-item key="daily">Daily</vui-segments-item>
        <vui-segments-item key="weekly">Weekly</vui-segments-item>
        <vui-segments-item key="monthly">Monthly</vui-segments-item>
        <vui-segments-item key="quarterly">Quarterly</vui-segments-item>
        <vui-segments-item key="yearly">Yearly</vui-segments-item>
      </vui-segments>
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