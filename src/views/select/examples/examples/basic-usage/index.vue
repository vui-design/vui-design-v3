<template>
  <vui-example id="example-select-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
    </template>
    <template v-slot:demo>
      <vui-select
        searchable
        v-model:value="value"
        v-on:change="handleChange"
        style="width: 200px;"
        placeholder="Please select"
      >
        <vui-option value="new york">New York</vui-option>
        <vui-option value="london">London</vui-option>
        <vui-option value="sydney">Sydney</vui-option>
        <vui-option value="ottawa">Ottawa</vui-option>
        <vui-option value="paris">Paris</vui-option>
        <vui-option value="canberra">Canberra</vui-option>
      </vui-select>
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
      const value = ref<string>("london");
      const handleChange = (value: string) => {
        console.log(value);
      };

      return {
        code,
        value,
        handleChange
      };
    }
  });
</script>