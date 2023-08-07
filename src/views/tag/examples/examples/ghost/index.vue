<template>
  <vui-example id="example-tag-ghost" v-bind:code="code">
    <template v-slot:title>幽灵标签</template>
    <template v-slot:description>
      <p>幽灵标签将标签的内容反色，背景变为半透明，常用在有色背景上。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-ghost">
        <vui-tag ghost>Default</vui-tag>
        <vui-tag color="primary" ghost>Primary</vui-tag>
        <vui-tag color="info" ghost>Info</vui-tag>
        <vui-tag color="warning" ghost>Warning</vui-tag>
        <vui-tag color="success" ghost>Success</vui-tag>
        <vui-tag color="error" ghost>Error</vui-tag>
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
  .example-tag-ghost { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-ghost .vui-tag + .vui-tag { margin-left:8px; }
</style>