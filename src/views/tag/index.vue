<template>
  <vui-article>
    <template v-slot:header>
      <h1>Tag 标签</h1>
      <p>进行标记和分类的小标签。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-tag-examples v-if="activeKey === 'examples'" />
    <vui-tag-api v-if="activeKey === 'api'" />
    <vui-tag-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiTagExamples from "./examples/index.vue";
  import VuiTagApi from "./api/index.vue";
  import VuiTagGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiTagExamples,
      VuiTagApi,
      VuiTagGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/tag");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>