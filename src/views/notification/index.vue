
<template>
  <vui-article>
    <template v-slot:header>
      <h1>Notification 通知提醒</h1>
      <p>轻量级的全局消息提示和确认机制，出现和消失时需要有缓动动画。</p>
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
      const { activeKey, handleChange } = useSegments("/components/notification");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>