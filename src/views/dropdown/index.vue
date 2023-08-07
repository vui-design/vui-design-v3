<template>
  <vui-article>
    <template v-slot:header>
      <h1>Dropdown 下拉菜单</h1>
      <p>用于承载过多的操作集合，通过下拉拓展的形式，收纳更多的操作。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-dropdown-examples v-if="activeKey === 'examples'" />
    <vui-dropdown-api v-if="activeKey === 'api'" />
    <vui-dropdown-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiDropdownExamples from "./examples/index.vue";
  import VuiDropdownApi from "./api/index.vue";
  import VuiDropdownGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiDropdownExamples,
      VuiDropdownApi,
      VuiDropdownGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/dropdown");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>