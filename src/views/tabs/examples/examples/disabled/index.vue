<template>
  <vui-example id="example-tabs-disabled" v-bind:code="code">
    <template v-slot:title>禁用</template>
    <template v-slot:description>
      <p>添加 <code>disabled</code> 属性可以禁用页签。</p>
    </template>
    <template v-slot:demo>
      <vui-tabs v-model:activeKey="activeKey">
        <vui-tab-panel key="tab1" title="Tab 1">Content of Tab Panel 1</vui-tab-panel>
        <vui-tab-panel key="tab2" title="Tab 2" disabled>Content of Tab Panel 2</vui-tab-panel>
        <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>
      </vui-tabs>
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
      const activeKey = ref<string>("tab1");

      return {
        code,
        activeKey
      };
    }
  });
</script>