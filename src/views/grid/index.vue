<template>
  <vui-article>
    <template v-slot:header>
      <h1>Grid 栅格系统</h1>
      <p>栅格是以规则的网格阵列来指导和规范网页中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-article-examples v-if="activeKey === 'examples'" />
    <vui-article-api v-if="activeKey === 'api'" />
    <vui-article-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiArticleExamples from "./examples/index.vue";
  import VuiArticleApi from "./api/index.vue";
  import VuiArticleGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiArticleExamples,
      VuiArticleApi,
      VuiArticleGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/grid");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>