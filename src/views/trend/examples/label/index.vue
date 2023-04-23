<template>
  <vui-example id="example-trend-label" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-trend-label">
        <vui-trend v-bind:value="1125" v-bind:target="1000" label="环比上期" />
        <vui-trend v-bind:value="80" v-bind:target="100" label="同比上周同期" />
      </div>
    </template>
    <template v-slot:title>标签文本</template>
    <template v-slot:description>
      <p>带标签文本的趋势标记。</p>
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
  .example-trend-label { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-label .vui-trend + .vui-trend { margin-left:24px; }
</style>