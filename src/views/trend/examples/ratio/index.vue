<template>
  <vui-example id="example-trend-ratio" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-trend-ratio">
        <vui-trend v-bind:ratio="12.5" />
        <vui-trend v-bind:ratio="-20" />
      </div>
    </template>
    <template v-slot:title>自定义趋势值</template>
    <template v-slot:description>
      <p>通过 <code>ratio</code> 属性直接标明趋势值。</p>
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
  .example-trend-ratio { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-ratio .vui-trend + .vui-trend { margin-left:24px; }
</style>