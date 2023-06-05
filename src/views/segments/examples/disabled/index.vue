<template>
  <vui-example id="example-segments-disabled" v-bind:code="code">
    <template v-slot:demo>
      <vui-space direction="vertical">
        <vui-segments disabled>
          <vui-segments-item key="map">Map</vui-segments-item>
          <vui-segments-item key="transit">Transit</vui-segments-item>
          <vui-segments-item key="satellite">Satellite</vui-segments-item>
        </vui-segments>
        <vui-segments>
          <vui-segments-item key="daily">Daily</vui-segments-item>
          <vui-segments-item key="weekly" disabled>Weekly</vui-segments-item>
          <vui-segments-item key="monthly">Monthly</vui-segments-item>
          <vui-segments-item key="quarterly" disabled>Quarterly</vui-segments-item>
          <vui-segments-item key="yearly" disabled>Yearly</vui-segments-item>
        </vui-segments>
        <vui-segments v-bind:options="options" />
      </vui-space>
    </template>
    <template v-slot:title>不可用</template>
    <template v-slot:description>
      <p>分段控制器的不可用状态。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  interface Option {
    key: string;
    label: string;
    disabled?: boolean;
  };

  const options: Option[] = [
    { key: "Daily", label: "Daily" },
    { key: "Weekly", label: "Weekly", disabled: true },
    { key: "Monthly", label: "Monthly" },
    { key: "Quarterly", label: "Quarterly", disabled: true },
    { key: "Yearly", label: "Yearly" }
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code,
        options
      };
    }
  });
</script>