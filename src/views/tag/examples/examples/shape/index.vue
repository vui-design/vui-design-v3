<template>
  <vui-example id="example-tag-shape" v-bind:code="code">
    <template v-slot:title>不同形状的标签</template>
    <template v-slot:description>
      <p>提供方形、圆角方形、标记形三种形状。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-shape">
        <vui-tag>Default</vui-tag>
        <vui-tag color="primary">Primary</vui-tag>
        <vui-tag shape="round">Default</vui-tag>
        <vui-tag color="primary" shape="round">Primary</vui-tag>
        <vui-tag shape="mark">Default</vui-tag>
        <vui-tag color="primary" shape="mark">Primary</vui-tag>
      </div>
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

<style>
  .example-tag-shape { display:flex; justify-content:flex-start; align-items:flex-start; gap:8px; }
</style>