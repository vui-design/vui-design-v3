<template>
  <vui-example id="example-segments-size" v-bind:code="code">
    <template v-slot:title>三种大小</template>
    <template v-slot:description>
      <p>分段控制器提供了三种尺寸：小、中（默认）、大，高度分别为 <code>24px</code>、<code>34px</code>、<code>44px</code>。</p>
    </template>
    <template v-slot:demo>
      <vui-space direction="vertical">
        <vui-segments size="small">
          <vui-segments-item key="daily">Daily</vui-segments-item>
          <vui-segments-item key="weekly">Weekly</vui-segments-item>
          <vui-segments-item key="monthly">Monthly</vui-segments-item>
          <vui-segments-item key="quarterly">Quarterly</vui-segments-item>
          <vui-segments-item key="yearly">Yearly</vui-segments-item>
        </vui-segments>
        <vui-segments>
          <vui-segments-item key="daily">Daily</vui-segments-item>
          <vui-segments-item key="weekly">Weekly</vui-segments-item>
          <vui-segments-item key="monthly">Monthly</vui-segments-item>
          <vui-segments-item key="quarterly">Quarterly</vui-segments-item>
          <vui-segments-item key="yearly">Yearly</vui-segments-item>
        </vui-segments>
        <vui-segments size="large">
          <vui-segments-item key="daily">Daily</vui-segments-item>
          <vui-segments-item key="weekly">Weekly</vui-segments-item>
          <vui-segments-item key="monthly">Monthly</vui-segments-item>
          <vui-segments-item key="quarterly">Quarterly</vui-segments-item>
          <vui-segments-item key="yearly">Yearly</vui-segments-item>
        </vui-segments>
      </vui-space>
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