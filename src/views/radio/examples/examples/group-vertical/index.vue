<template>
  <vui-example id="example-radio-group-vertical" v-bind:code="code">
    <template v-slot:title>垂直排列</template>
    <template v-slot:description>
      <p>设置 <code>layout="vertical"</code> 可以垂直排列单选组合。</p>
    </template>
    <template v-slot:demo>
      <vui-radio-group
        layout="vertical"
        v-model:value="value"
        v-on:change="handleChange"
      >
        <vui-radio v-bind:value="1">A</vui-radio>
        <vui-radio v-bind:value="2">B</vui-radio>
        <vui-radio v-bind:value="3">C</vui-radio>
        <vui-radio v-bind:value="4">D</vui-radio>
      </vui-radio-group>
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
      const value = ref<number>(1);
      const handleChange = (newValue: number) => {
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