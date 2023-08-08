<template>
  <vui-example id="example-checkbox-group" v-bind:code="code">
    <template v-slot:demo>
      <vui-checkbox-group
        v-model:value="value"
        v-on:change="handleChange"
      >
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
    </template>
    <template v-slot:title>多选组合</template>
    <template v-slot:description>
      <p>多选组合。</p>
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
      const value = ref<number[]>([1]);
      const handleChange = (newValue: number[]) => {
        console.log(newValue);
      };

      return {
        code,
        value,
        handleChange
      };
    }
  });
</script>