<template>
  <vui-example id="example-select-multiple" v-bind:code="code">
    <template v-slot:title>多选</template>
    <template v-slot:description>
      <p>设置 <code>multiple</code> 属性可以开启多选模式。多选模式下，<code>v-model</code> 接受数组类型的数据。</p>
    </template>
    <template v-slot:demo>
      <vui-select
        v-model:value="value"
        v-on:change="handleChange"
        multiple
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
      const value = ref<string[]>(["london", "ottawa"]);
      const handleChange = (value: string[]) => {
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