const code =
`<template>
  <vui-space direction="vertical">
    <vui-segments v-model:activeKey="activeKey1" v-bind:options="options1" />
    <vui-segments v-model:activeKey="activeKey2" v-bind:options="options2" />
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

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
    setup() {
      const activeKey1 = ref<string>("Daily");
      const activeKey2 = ref<string>("Daily");

      watch(activeKey1, newActiveKey1 => {
        console.log(newActiveKey1);
      });

      watch(activeKey2, newActiveKey2 => {
        console.log(newActiveKey2);
      });

      return {
        activeKey1,
        options1,
        activeKey2,
        options2
      };
    }
  });
</script>
`;

export default code;