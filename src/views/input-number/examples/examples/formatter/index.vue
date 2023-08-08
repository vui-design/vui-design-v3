<template>
  <vui-example id="example-input-number-formatter" v-bind:code="code">
    <template v-slot:title>格式化展示</template>
    <template v-slot:description>
      <p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据。</p>
    </template>
    <template v-slot:demo>
      <div class="example-input-number-formatter">
        <vui-input-number v-model:value="value1" v-bind:min="0" v-bind:formatter="formatter1" />
        <vui-input-number v-model:value="value2" v-bind:min="50" v-bind:max="100" v-bind:formatter="formatter2" />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value1 = ref<number>(1010);
      const value2 = ref<number>(60);

      const formatter1 = (value: number) => ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const formatter2 = (value: number) => value + "%";

      return {
        code,
        value1,
        value2,
        formatter1,
        formatter2
      };
    }
  });
</script>

<style>
  .example-input-number-formatter .vui-input-number + .vui-input-number { margin-left:16px; }
</style>