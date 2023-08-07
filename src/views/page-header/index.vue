<template>
  <vui-article>
    <template v-slot:header>
      <h1>PageHeader 页头</h1>
      <p>页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作、页面级导航等组成。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-page-header-examples v-if="activeKey === 'examples'" />
    <vui-page-header-api v-if="activeKey === 'api'" />
    <vui-page-header-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiPageHeaderExamples from "./examples/index.vue";
  import VuiPageHeaderApi from "./api/index.vue";
  import VuiPageHeaderGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiPageHeaderExamples,
      VuiPageHeaderApi,
      VuiPageHeaderGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/page-header");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>