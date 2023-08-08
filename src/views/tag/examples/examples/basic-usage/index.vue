<template>
  <vui-example id="example-tag-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的标签展示。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-basic-usage">
        <vui-tag>Default</vui-tag>
        <vui-tag color="primary">Primary</vui-tag>
        <vui-tag color="info">Info</vui-tag>
        <vui-tag color="warning">Warning</vui-tag>
        <vui-tag color="success">Success</vui-tag>
        <vui-tag color="error">Error</vui-tag>
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
  .example-tag-basic-usage { display:flex; justify-content:flex-start; align-items:flex-start; gap:8px; }
</style>