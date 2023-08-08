<template>
  <vui-example id="example-descriptions-vertical-bordered" v-bind:code="code">
    <template v-slot:title>垂直带边框的</template>
    <template v-slot:description>
      <p>垂直带边框和背景颜色的描述列表。</p>
    </template>
    <template v-slot:demo>
      <div class="example-descriptions-vertical-bordered">
        <vui-descriptions layout="vertical" bordered title="User Info">
          <vui-description label="Product">Cloud Database</vui-description>
          <vui-description label="Billing Mode">Prepaid</vui-description>
          <vui-description label="Automatic Renewal">YES</vui-description>
          <vui-description label="Order time">2018-04-24 18:00:00</vui-description>
          <vui-description label="Usage Time" v-bind:span="2">2019-04-24 18:00:00</vui-description>
          <vui-description label="Status" v-bind:span="3">
            <vui-badge status="processing" text="Running" />
          </vui-description>
          <vui-description label="Negotiated Amount">$80.00</vui-description>
          <vui-description label="Discount">$20.00</vui-description>
          <vui-description label="Official Receipts">$60.00</vui-description>
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
  .example-descriptions-vertical-bordered .vui-descriptions p { margin:0; }
</style>