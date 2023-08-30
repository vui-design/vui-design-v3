<template>
  <vui-example id="example-link-size" v-bind:code="code">
    <template v-slot:title>链接尺寸</template>
    <template v-slot:description>
      <p>文字链接有小、中、大三种尺寸。</p>
      <p>通过设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 以使用小型或大型文字链接。若不设置 <code>size</code>，则默认为中型尺寸。</p>
    </template>
    <template v-slot:demo>
      <div class="example-link-size">
        <vui-space block>
          <vui-link size="small">Default</vui-link>
          <vui-link type="primary" size="small">Primary</vui-link>
          <vui-link icon="edit" size="small">Edit</vui-link>
          <vui-link type="danger" icon="dustbin" size="small">Delete</vui-link>
        </vui-space>
        <vui-space block>
          <vui-link>Default</vui-link>
          <vui-link type="primary">Primary</vui-link>
          <vui-link icon="edit">Edit</vui-link>
          <vui-link type="danger" icon="dustbin">Delete</vui-link>
        </vui-space>
        <vui-space block>
          <vui-link size="large">Default</vui-link>
          <vui-link type="primary" size="large">Primary</vui-link>
          <vui-link icon="edit" size="large">Edit</vui-link>
          <vui-link type="danger" icon="dustbin" size="large">Delete</vui-link>
        </vui-space>
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
  .example-link-size .vui-space + .vui-space { margin-top:8px; }
</style>