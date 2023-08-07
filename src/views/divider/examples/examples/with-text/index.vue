<template>
  <vui-example id="example-divider-with-text" v-bind:code="code">
    <template v-slot:title>带文字的分割线</template>
    <template v-slot:description>
      <p>带文字的分割线是指在分割线中嵌入文字，在需要对分割内容进行解释说明时使用，仅支持水平分割线，可以使用 <code>orientation</code> 指定文字位置。</p>
    </template>
    <template v-slot:demo>
      <div class="example-divider-with-text">
        <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>
        <vui-divider>Text</vui-divider>
        <p>That was my way of getting through difficult times of low confidence – hard work.</p>
        <vui-divider orientation="left">Left Text</vui-divider>
        <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>
        <vui-divider orientation="right">Right Text</vui-divider>
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
  .example-divider-with-text p { margin:0 !important; }
</style>