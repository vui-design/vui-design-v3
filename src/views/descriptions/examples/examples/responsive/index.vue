<template>
  <vui-example id="example-descriptions-responsive" v-bind:code="code">
    <template v-slot:title>响应式</template>
    <template v-slot:description>
      <p>通过响应式的配置可以实现在小屏幕设备上的完美呈现。</p>
    </template>
    <template v-slot:demo>
      <div class="example-descriptions-responsive">
        <vui-descriptions bordered v-bind:columns="{ xxl: 4, xl: 3, lg: 2, md: 1, sm: 1, xs: 1 }" title="Responsive Descriptions">
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
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-descriptions-responsive .vui-descriptions p { margin:0; }
</style>