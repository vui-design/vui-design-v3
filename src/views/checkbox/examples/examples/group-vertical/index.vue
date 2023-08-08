<template>
  <vui-example id="example-checkbox-group-vertical" v-bind:code="code">
    <template v-slot:title>垂直排列</template>
    <template v-slot:description>
      <p>设置 <code>layout="vertical"</code> 可以垂直排列多选组合。</p>
    </template>
    <template v-slot:demo>
      <vui-checkbox-group
        layout="vertical"
        v-model:value="value"
        v-on:change="handleChange"
      >
        <vui-checkbox v-bind:value="1">A</vui-checkbox>
        <vui-checkbox v-bind:value="2">B</vui-checkbox>
        <vui-checkbox v-bind:value="3">C</vui-checkbox>
        <vui-checkbox v-bind:value="4">D</vui-checkbox>
      </vui-checkbox-group>
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
      const value = ref<string[]>([1]);
      const handleChange = (newValue: string[]) => {
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