<template>
  <vui-example id="example-trend-reverse-color" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-trend-reverse-color">
        <vui-trend v-bind:value="1125" v-bind:reference="1000" reverseColor />
        <vui-trend v-bind:value="80" v-bind:reference="100" reverseColor />
      </div>
    </template>
    <template v-slot:title>颜色反转</template>
    <template v-slot:description>
      <p>将两种趋势的颜色进行反转。</p>
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
  .example-trend-reverse-color { display:flex; justify-content:flex-start; align-items:center; }
  .example-trend-reverse-color .vui-trend + .vui-trend { margin-left:24px; }
</style>