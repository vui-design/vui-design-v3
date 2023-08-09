<template>
  <vui-example id="example-trend-precision" v-bind:code="code">
    <template v-slot:title>数值精度</template>
    <template v-slot:description>
      <p>保留两位小数。</p>
    </template>
    <template v-slot:demo>
      <div class="example-trend-precision">
        <vui-trend v-bind:value="1125" v-bind:target="1000" v-bind:precision="2" />
        <vui-trend v-bind:value="80" v-bind:target="100" v-bind:precision="2" />
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
  .example-trend-precision { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-precision .vui-trend + .vui-trend { margin-left:24px; }
</style>