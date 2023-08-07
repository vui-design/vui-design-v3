<template>
  <vui-article>
    <template v-slot:header>
      <h1>Space 间距</h1>
      <p>控制组件之间的间距。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-space-examples v-if="activeKey === 'examples'" />
    <vui-space-api v-if="activeKey === 'api'" />
    <vui-space-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiSpaceExamples from "./examples/index.vue";
  import VuiSpaceApi from "./api/index.vue";
  import VuiSpaceGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiSpaceExamples,
      VuiSpaceApi,
      VuiSpaceGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/space");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>