<template>
  <vui-example id="example-tag-shape" v-bind:code="code">
    <template v-slot:title>不同形状的标签</template>
    <template v-slot:description>
      <p>提供方形、圆角方形、标记形三种形状。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tag-shape">
        <section>
          <vui-tag>Default</vui-tag>
          <vui-tag color="primary">Primary</vui-tag>
        </section>
        <section>
          <vui-tag shape="round">Default</vui-tag>
          <vui-tag color="primary" shape="round">Primary</vui-tag>
        </section>
        <section>
          <vui-tag shape="mark">Default</vui-tag>
          <vui-tag color="primary" shape="mark">Primary</vui-tag>
        </section>
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
  .example-tag-shape section + section { margin-top:8px; }
  .example-tag-shape section { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-shape section .vui-tag + .vui-tag { margin-left:8px; }
</style>