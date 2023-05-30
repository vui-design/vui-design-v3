<template>
  <vui-example id="example-tag-colorful" v-bind:code="code">
    <template v-slot:demo>
      <div>
        <div class="example-tag-colorful">
          <vui-divider orientation="left">Presets</vui-divider>
          <div class="vui-tag-list">
            <vui-tag>default</vui-tag>
            <vui-tag color="primary">primary</vui-tag>
            <vui-tag color="info">info</vui-tag>
            <vui-tag color="warning">warning</vui-tag>
            <vui-tag color="success">success</vui-tag>
            <vui-tag color="error">error</vui-tag>
            <vui-tag color="blue">blue</vui-tag>
            <vui-tag color="cyan">cyan</vui-tag>
            <vui-tag color="geekblue">geekblue</vui-tag>
            <vui-tag color="gold">gold</vui-tag>
            <vui-tag color="green">green</vui-tag>
            <vui-tag color="lime">lime</vui-tag>
            <vui-tag color="magenta">magenta</vui-tag>
            <vui-tag color="orange">orange</vui-tag>
            <vui-tag color="pink">pink</vui-tag>
            <vui-tag color="purple">purple</vui-tag>
            <vui-tag color="red">red</vui-tag>
            <vui-tag color="volcano">volcano</vui-tag>
            <vui-tag color="yellow">yellow</vui-tag>
          </div>
        </div>
        <div class="example-tag-colorful">
          <vui-divider orientation="left">Custom</vui-divider>
          <div class="vui-tag-list">
            <vui-tag color="#f60">#f60</vui-tag>
            <vui-tag color="#2db7f5">#2db7f5</vui-tag>
            <vui-tag color="#87d068">#87d068</vui-tag>
            <vui-tag color="#108ee9">#108ee9</vui-tag>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:title>多彩标签</template>
    <template v-slot:description>
      <p>多种预设颜色，用作不同场景。如果预设值不能满足你的需求，可以自定义 16 进制颜色值。</p>
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
  .example-tag-colorful + .example-tag-colorful { margin-top:24px; }
  .example-tag-colorful .vui-divider { margin-top:0; }
  .example-tag-colorful .vui-tag-list { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; row-gap:8px; }
  .example-tag-colorful .vui-tag { margin-right:8px; }
</style>