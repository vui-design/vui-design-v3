<template>
  <vui-example id="example-statistic-card" v-bind:code="code">
    <template v-slot:title>在卡片中使用</template>
    <template v-slot:description>
      <p>在卡片中展示统计数值。</p>
    </template>
    <template v-slot:demo>
      <div class="example-statistic-card">
        <vui-row v-bind:gutter="24">
          <vui-col v-bind:span="12">
            <vui-card v-bind:bordered="false">
              <vui-statistic v-bind:value="11.5" v-bind:precision="2" suffix="%" title="Active" valueStyle="color: #52c41a;">
                <template v-slot:prefix>
                  <vui-icon type="arrow-up" />
                </template>
              </vui-statistic>
            </vui-card>
          </vui-col>
          <vui-col v-bind:span="12">
            <vui-card v-bind:bordered="false">
              <vui-statistic v-bind:value="9.5" v-bind:precision="2" suffix="%" title="Idle" valueStyle="color: #ff4d4f;">
                <template v-slot:prefix>
                  <vui-icon type="arrow-down" />
                </template>
              </vui-statistic>
            </vui-card>
          </vui-col>
        </vui-row>
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
  .example-statistic-card { background-color:#f6f6f6; padding:24px; }
</style>