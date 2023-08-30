<template>
  <vui-example id="example-descriptions-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>不同尺寸，适应在各种容器中展示。</p>
    </template>
    <template v-slot:demo>
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
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const size = ref<string>("small");

      return {
        code,
        size
      };
    }
  });
</script>

<style>
  .example-descriptions-size .vui-descriptions { margin-top:24px; }
  .example-descriptions-size .vui-descriptions p { margin:0; }
</style>