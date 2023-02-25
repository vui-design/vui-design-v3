<template>
  <vui-example id="example-link-link" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-link-link">
        <vui-link type="primary" href="https://cn.vuejs.org/">Vue.js</vui-link>
        <vui-link type="primary" href="https://github.com/" target="_blank">Github</vui-link>
        <vui-link href="/guide">Guide</vui-link>
        <vui-link href="/components" target="_blank">Components</vui-link>
      </div>
    </template>
    <template v-slot:title>链接导航</template>
    <template v-slot:description>
      <p>属性 <code>href</code> 用于设置文字链接点击后的跳转地址，指定此属性后文字链接的点击行为将和原生 <code>a</code> 链接保持一致。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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
  .example-link-link .vui-link + .vui-link { margin-left:16px; }
</style>