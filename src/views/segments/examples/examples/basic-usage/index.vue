<template>
  <vui-example id="example-segments-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
    </template>
    <template v-slot:demo>
      <vui-segments v-model:activeKey="activeKey">
        <vui-segments-item key="daily">Daily</vui-segments-item>
        <vui-segments-item key="weekly">Weekly</vui-segments-item>
        <vui-segments-item key="monthly">Monthly</vui-segments-item>
        <vui-segments-item key="quarterly">Quarterly</vui-segments-item>
        <vui-segments-item key="yearly">Yearly</vui-segments-item>
      </vui-segments>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const activeKey = ref<string>("daily");

      watch(activeKey, (newActiveKey: string) => {
        console.log(newActiveKey);
      });

      return {
        code,
        activeKey
      };
    }
  });
</script>