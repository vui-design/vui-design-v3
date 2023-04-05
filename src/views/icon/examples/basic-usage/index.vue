<template>
  <vui-example id="example-icon-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-icon-basic-usage">
        <vui-icon type="apps" />
        <vui-icon type="apps-filled" />
        <vui-icon type="settings" />
        <vui-icon type="settings-filled" />
        <vui-icon type="search" />
        <vui-icon type="search-filled" />
        <vui-icon type="loading" />
        <vui-icon type="loading-filled" />
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>使用 Icon 组件，指定图标对应的 <code>type</code> 属性。可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</p>
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
  .example-icon-basic-usage .vui-icon { margin-right:16px; }
</style>