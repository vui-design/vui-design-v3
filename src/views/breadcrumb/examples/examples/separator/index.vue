<template>
  <vui-example id="example-breadcrumb-separator" v-bind:code="code">
    <template v-slot:title>分隔符</template>
    <template v-slot:description>
      <p>使用 <code>separator</code> 属性可以自定义分隔符。</p>
    </template>
    <template v-slot:demo>
      <vui-breadcrumb separator=">">
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
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