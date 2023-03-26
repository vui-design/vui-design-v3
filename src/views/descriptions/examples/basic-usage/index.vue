<template>
  <vui-example id="example-descriptions-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-descriptions title="User Info">
        <vui-description label="UserName">Zhang San</vui-description>
        <vui-description label="Telephone">18066668888</vui-description>
        <vui-description label="Live">Hangzhou, Zhejiang</vui-description>
        <vui-description label="Address" v-bind:span="2">
          No. 1, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China
        </vui-description>
        <vui-description label="Remark">Empty</vui-description>
      </vui-descriptions>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的描述列表。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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