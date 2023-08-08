<template>
  <vui-example id="example-tag-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>设置 <code>size</code> 属性可以显示不同尺寸的标签，默认为中等尺寸。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-size">
        <vui-tag size="small">Small</vui-tag>
        <vui-tag>Medium</vui-tag>
        <vui-tag size="large">Large</vui-tag>
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
  .example-tag-size { display:flex; justify-content:flex-start; align-items:center; gap:8px; }
</style>