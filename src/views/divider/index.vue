<template>
  <vui-article>
    <template v-slot:header>
      <h1>Divider 分割线</h1>
      <p>分割线是一个呈线状的轻量化组件，起到分隔、组织、细化的作用，用于有逻辑的组织元素内容和页面结构。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-divider-examples v-if="activeKey === 'examples'" />
    <vui-divider-api v-if="activeKey === 'api'" />
    <vui-divider-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiDividerExamples from "./examples/index.vue";
  import VuiDividerApi from "./api/index.vue";
  import VuiDividerGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiDividerExamples,
      VuiDividerApi,
      VuiDividerGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/divider");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>