<template>
  <vui-example id="example-tabs-custom-title" v-bind:code="code">
    <template v-slot:title>自定义标题</template>
    <template v-slot:description>
      <p>可以通过具名插槽来实现自定义页签标题。</p>
    </template>
    <template v-slot:demo>
      <vui-tabs v-model:activeKey="activeKey">
        <vui-tab-panel key="tab1">
          <template v-slot:title>
            <span style="margin-right: 8px; vertical-align: middle;">Tab 1</span>
            <vui-badge status="error" />
          </template>
          Content of Tab Panel 1
        </vui-tab-panel>
        <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>
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