<template>
  <vui-example id="example-authorizer-toggle" v-bind:code="code">
    <template v-slot:title>切换访问权限</template>
    <template v-slot:description>
      <p>切换访问权限。</p>
      <p>本示例假定当前用户角色标识为 ["admin", "user"]，即管理员和普通用户！</p>
    </template>
    <template v-slot:demo>
      <div class="example-authorizer-toggle">
        <vui-config-provider v-bind="configProvider">
          <vui-segments v-model:activeKey="value">
            <vui-segments-item key="admin">以下内容管理员可访问</vui-segments-item>
            <vui-segments-item key="superadmin">以下内容超级管理员可访问</vui-segments-item>
          </vui-segments>
          <vui-authorizer v-bind:value="value">
            <vui-descriptions bordered>
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
            <template v-slot:replacement>
              <vui-result
                status="403"
                title="403"
                description="Sorry, you are not authorized to access this page."
              >
                <template v-slot:extra>
                  <vui-button type="primary">Back Home</vui-button>
                </template>
              </vui-result>
            </template>
          </vui-authorizer>
        </vui-config-provider>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const configProvider = {
    authorize: (
      value: string | string[] | undefined,
      attrs: Record<string, unknown>
    ) => {
      if (!value) {
        return true;
      }

      return ["admin", "user"].some(role => typeof value === "string" ? value === role : value.includes(role));
    }
  };

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<string>("admin");

      return {
        code,
        configProvider,
        value
      };
    }
  });
</script>

<style>
  .example-authorizer-toggle .vui-segments { margin-bottom:32px; }
</style>