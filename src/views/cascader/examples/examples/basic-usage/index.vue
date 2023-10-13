<template>
  <vui-example id="example-cascader-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>省市区级联。</p>
    </template>
    <template v-slot:demo>
      <vui-cascader
        v-model:value="value"
        v-bind:options="options"
        v-on:change="handleChange"
        style="width: 200px;"
        placeholder="Please select"
      />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import type { CascaderOption } from "vui-design";
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const options: CascaderOption[] = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake"
            }
          ]
        }
      ]
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men"
            }
          ]
        }
      ]
    }
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<string[]>([]);
      const handleChange = (value: string[]) => {
        console.log(value);
      };

      return {
        code,
        value,
        options,
        handleChange
      };
    }
  });
</script>