const code =
`<template>
  <vui-cascader
    v-model:value="value"
    v-bind:options="options"
    v-on:change="handleChange"
    style="width: 200px;"
    placeholder="Please select"
  />
</template>

<script lang="ts">
  import type { CascaderOption } from "vui-design";
  import { defineComponent, ref } from "vue";

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
    setup() {
      const value = ref<string[]>([]);
      const handleChange = (value: string[]) => {
        console.log(value);
      };

      return {
        value,
        options,
        handleChange
      };
    }
  });
</script>
`;

export default code;