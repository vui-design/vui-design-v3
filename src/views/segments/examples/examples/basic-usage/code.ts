const code =
`<template>
  <vui-segments v-model:activeKey="activeKey">
    <vui-segments-item key="daily">Daily</vui-segments-item>
    <vui-segments-item key="weekly">Weekly</vui-segments-item>
    <vui-segments-item key="monthly">Monthly</vui-segments-item>
    <vui-segments-item key="quarterly">Quarterly</vui-segments-item>
    <vui-segments-item key="yearly">Yearly</vui-segments-item>
  </vui-segments>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const activeKey = ref<string>("daily");

      watch(activeKey, (newActiveKey: string) => {
        console.log(newActiveKey);
      });

      return {
        activeKey
      };
    }
  });
</script>
`;

export default code;