<template>
  <vui-example id="example-button-link" v-bind:code="code">
    <template v-slot:title>链接按钮</template>
    <template v-slot:description>
      <p>属性 <code>href</code> 用于设置按钮点击后的跳转地址，指定此属性后按钮的点击行为将和普通 <code>a</code> 链接保持一致。</p>
    </template>
    <template v-slot:demo>
      <div class="example-button-link">
        <vui-button type="primary" href="https://cn.vuejs.org/">Vue.js</vui-button>
        <vui-button type="primary" href="https://github.com/" target="_blank">Github</vui-button>
        <vui-button href="/guide">Guide</vui-button>
        <vui-button href="/components" target="_blank">Components</vui-button>
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
  .example-button-link { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; gap:16px; }
</style>