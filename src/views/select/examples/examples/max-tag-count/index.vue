<template>
  <vui-example id="example-select-max-tag-count" v-bind:code="code">
    <template v-slot:title>最多显示数量</template>
    <template v-slot:description>
      <p>属性 <code>maxTagCount</code> 用于指定最多显示多少个 <code>tag</code> 标签，超出的部分折叠。</p>
    </template>
    <template v-slot:demo>
      <div class="example-select-max-tag-count">
        <vui-select
          v-model:value="value1"
          v-bind:maxTagCount="2"
          multiple
          placeholder="Please select"
          v-on:change="handleChange1"
        >
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select
          v-model:value="value2"
          v-bind:maxTagCount="2"
          v-bind:maxTagPlaceholder="maxTagPlaceholder2"
          multiple
          placeholder="Please select"
          v-on:change="handleChange2"
        >
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
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
      const value1 = ref<string[]>([]);
      const handleChange1 = (value: string) => {
        console.log(value);
      };

      const value2 = ref<string[]>([]);
      const maxTagPlaceholder2 = (count: number) => "More " + count;
      const handleChange2 = (value: string) => {
        console.log(value);
      };

      return {
        code,
        value1,
        handleChange1,
        value2,
        maxTagPlaceholder2,
        handleChange2
      };
    }
  });
</script>

<style>
  .example-select-max-tag-count .vui-select + .vui-select { margin-top:24px; }
</style>