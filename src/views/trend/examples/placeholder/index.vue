<template>
  <vui-example id="example-trend-placeholder" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-trend-placeholder">
        <vui-trend v-bind:value="1125" v-bind:target="0" />
        <vui-trend v-bind:value="80" v-bind:target="0" placeholder="--" />
      </div>
    </template>
    <template v-slot:title>占位文本</template>
    <template v-slot:description>
      <p>趋势值无效时的占位文本，默认为 <code>NaN</code>；如对比值为 <code>0</code> 或趋势值无穷大等情况。</p>
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
  .example-trend-placeholder { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-placeholder .vui-trend + .vui-trend { margin-left:24px; }
</style>