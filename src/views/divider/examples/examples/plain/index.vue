<template>
  <vui-example id="example-divider-plain" v-bind:code="code">
    <template v-slot:title>分割文字使用正文样式</template>
    <template v-slot:description>
      <p>使用 <code>plain</code> 可以设置更为轻量的分割文字样式。</p>
    </template>
    <template v-slot:demo>
      <div class="example-divider-plain">
        <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>
        <vui-divider plain>Text</vui-divider>
        <p>That was my way of getting through difficult times of low confidence – hard work.</p>
        <vui-divider orientation="left" plain>Left Text</vui-divider>
        <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>
        <vui-divider orientation="right" plain>Right Text</vui-divider>
        <p>It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.</p>
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
  .example-divider-plain p { margin:0 !important; }
</style>