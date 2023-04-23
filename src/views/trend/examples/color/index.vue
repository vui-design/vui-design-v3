<template>
  <vui-example id="example-trend-color" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-trend-color">
        <vui-trend v-bind:value="1125" v-bind:target="1000" downwardColor="#a0d911" upwardColor="#eb2f96" />
        <vui-trend v-bind:value="80" v-bind:target="100" downwardColor="#a0d911" upwardColor="#eb2f96" />
      </div>
    </template>
    <template v-slot:title>自定义颜色</template>
    <template v-slot:description>
      <p>自定义趋势标记的颜色。</p>
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
  .example-trend-color { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-color .vui-trend + .vui-trend { margin-left:24px; }
</style>