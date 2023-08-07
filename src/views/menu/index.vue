<template>
  <vui-article>
    <template v-slot:header>
      <h1>Menu 导航菜单</h1>
      <p>用于承载网站的架构，并提供跳转的菜单列表。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-menu-examples v-if="activeKey === 'examples'" />
    <vui-menu-api v-if="activeKey === 'api'" />
    <vui-menu-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiMenuExamples from "./examples/index.vue";
  import VuiMenuApi from "./api/index.vue";
  import VuiMenuGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiMenuExamples,
      VuiMenuApi,
      VuiMenuGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/menu");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>