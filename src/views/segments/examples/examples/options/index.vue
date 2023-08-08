<template>
  <vui-example id="example-segments-options" v-bind:code="code">
    <template v-slot:title>配置方式</template>
    <template v-slot:description>
      <p>通过配置 <code>options</code> 属性来渲染分段控制器。</p>
    </template>
    <template v-slot:demo>
      <vui-space direction="vertical">
        <vui-segments v-model:activeKey="activeKey1" v-bind:options="options1" />
        <vui-segments v-model:activeKey="activeKey2" v-bind:options="options2" />
      </vui-space>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  interface Option {
    key: string;
    label: string;
  };

  const options1: string[] = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];
  const options2: Option[] = [
    { key: "Daily", label: "Daily" },
    { key: "Weekly", label: "Weekly" },
    { key: "Monthly", label: "Monthly" },
    { key: "Quarterly", label: "Quarterly" },
    { key: "Yearly", label: "Yearly" }
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const activeKey1 = ref<string>("Daily");
      const activeKey2 = ref<string>("Daily");

      watch(activeKey1, (newActiveKey1: string) => {
        console.log(newActiveKey1);
      });

      watch(activeKey2, (newActiveKey2: string) => {
        console.log(newActiveKey2);
      });

      return {
        code,
        activeKey1,
        options1,
        activeKey2,
        options2
      };
    }
  });
</script>