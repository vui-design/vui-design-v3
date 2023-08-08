<template>
  <vui-example id="example-radio-group-options" v-bind:code="code">
    <template v-slot:title>配置方式</template>
    <template v-slot:description>
      <p>通过配置 <code>options</code> 属性来渲染单选组合。</p>
    </template>
    <template v-slot:demo>
      <div class="example-radio-group-options">
        <vui-radio-group v-model:value="value1" v-bind:options="options1" />
        <br />
        <br />
        <vui-radio-group v-model:value="value2" v-bind:options="options2" />
        <br />
        <br />
        <vui-radio-group v-model:value="value3" v-bind:options="options3" disabled />
        <br />
        <br />
        <vui-radio-group v-model:value="value4" v-bind:options="options4">
          <template v-slot:label="{ option }">{{option.label}}</template>
        </vui-radio-group>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const options1 = ["A", "B", "C", "D"];
  const options2 = [
    { label: "A", value: "A" },
    { label: "B", value: "B", disabled: true },
    { label: "C", value: "C" },
    { label: "D", value: "D" }
  ];
  const options3 = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" }
  ];
  const options4 = ["A", "B", "C", "D"];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value1 = ref<string>("A");
      const value2 = ref<string>("A");
      const value3 = ref<string>("A");
      const value4 = ref<string>("A");

      return {
        code,
        value1,
        value2,
        value3,
        value4,
        options1,
        options2,
        options3,
        options4
      };
    }
  });
</script>

<style>
  .example-radio-group-options { line-height:1; }
</style>