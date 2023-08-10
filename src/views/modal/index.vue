<template>
  <vui-article>
    <template v-slot:header>
      <h1>Modal 对话框</h1>
      <p>对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时，在页面中打开一个对话框承载相应的信息及操作。</p>
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
      const { activeKey, handleChange } = useSegments("/components/modal");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>