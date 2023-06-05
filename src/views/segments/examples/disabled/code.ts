const code =
`<template>
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

<script lang="ts">
  import { defineComponent } from "vue";

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
    setup() {
      return {
        options
      };
    }
  });
</script>
`;

export default code;