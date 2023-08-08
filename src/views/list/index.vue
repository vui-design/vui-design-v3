<template>
  <vui-article>
    <template v-slot:header>
      <h1>List 列表</h1>
      <p>列表用一个连续的列来显示多行元素，常用于具有相同构成及内容的模块批量展示，可承载多样化的信息内容，从纯文字到复杂的图文组合。</p>
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
      const { activeKey, handleChange } = useSegments("/components/list");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>