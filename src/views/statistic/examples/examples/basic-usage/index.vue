<template>
  <vui-example id="example-statistic-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单展示。</p>
    </template>
    <template v-slot:demo>
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="12">
          <vui-statistic v-bind:value="12345" title="Active Users" />
        </vui-col>
        <vui-col v-bind:span="12">
          <vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
        </vui-col>
      </vui-row>
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