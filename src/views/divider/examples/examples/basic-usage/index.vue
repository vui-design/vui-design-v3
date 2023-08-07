<template>
  <vui-example id="example-divider-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>对不同章节的文本段落进行分割，默认为水平分割线，支持虚线或双实线样式。</p>
    </template>
    <template v-slot:demo>
      <div class="example-divider-basic-usage">
        <p>Be careful how you judge people, most of all friends. You don’t sum up a man’s life in one moment.</p>
        <vui-divider />
        <p>That was my way of getting through difficult times of low confidence – hard work.</p>
        <vui-divider type="dashed" />
        <p>There is not a heart but has its moments of longing, yearning for something better, nobler and holier than it knows before.</p>
        <vui-divider type="dotted" />
        <p>Fortune knocks once at least at every man’s door.</p>
        <vui-divider type="double" />
        <p>He would climb the ladder must begin at the bottom.</p>
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
  .example-divider-basic-usage p { margin:0 !important; }
</style>