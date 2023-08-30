const code =
`<template>
  <div class="example-descriptions-size">
    <vui-segments v-model:activeKey="size">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <vui-descriptions v-bind:size="size" title="Custom Size">
      <vui-description label="Product">Cloud Database</vui-description>
      <vui-description label="Billing">Prepaid</vui-description>
      <vui-description label="time">18:00:00</vui-description>
      <vui-description label="Amount">$80.00</vui-description>
      <vui-description label="Discount">$20.00</vui-description>
      <vui-description label="Official">$60.00</vui-description>
    </vui-descriptions>
    <vui-descriptions bordered v-bind:size="size" title="Custom Size">
      <vui-description label="Product">Cloud Database</vui-description>
      <vui-description label="Billing">Prepaid</vui-description>
      <vui-description label="time">18:00:00</vui-description>
      <vui-description label="Amount">$80.00</vui-description>
      <vui-description label="Discount">$20.00</vui-description>
      <vui-description label="Official">$60.00</vui-description>
      <vui-description label="Config Info">
        <p>Data disk type: MongoDB</p>
        <p>Database version: 3.4</p>
        <p>Package: dds.mongo.mid</p>
        <p>Storage space: 10 GB</p>
        <p>Replication factor: 3</p>
        <p>Region: East China 1</p>
      </vui-description>
    </vui-descriptions>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("small");

      return {
        size
      };
    }
  });
</script>

<style>
  .example-descriptions-size .vui-descriptions { margin-top:24px; }
  .example-descriptions-size .vui-descriptions p { margin:0; }
</style>
`;

export default code;