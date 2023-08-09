<template>
  <vui-example id="example-trend-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
    </template>
    <template v-slot:demo>
      <div class="example-trend-basic-usage">
        <vui-trend v-bind:value="1125" v-bind:target="1000" />
        <vui-trend v-bind:value="80" v-bind:target="100" />
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
  .example-trend-basic-usage { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-basic-usage .vui-trend + .vui-trend { margin-left:24px; }
</style>