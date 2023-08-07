<template>
  <vui-article>
    <template v-slot:header>
      <h1>Button 按钮</h1>
      <p>按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。</p>
    </template>
    <template v-slot:segments>
      <vui-segments size="large" v-bind:activeKey="activeKey" v-on:change="handleChange">
        <vui-segments-item key="examples">示例</vui-segments-item>
        <vui-segments-item key="api">API</vui-segments-item>
        <vui-segments-item key="guide">指南</vui-segments-item>
      </vui-segments>
    </template>
    <vui-button-examples v-if="activeKey === 'examples'" />
    <vui-button-api v-if="activeKey === 'api'" />
    <vui-button-guide v-if="activeKey === 'guide'" />
  </vui-article>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiArticle from "../../components/article/index.vue";
  import VuiButtonExamples from "./examples/index.vue";
  import VuiButtonApi from "./api/index.vue";
  import VuiButtonGuide from "./guide/index.vue";
  import useSegments from "../../hooks/useSegments";

  export default defineComponent({
    components: {
      VuiArticle,
      VuiButtonExamples,
      VuiButtonApi,
      VuiButtonGuide
    },
    setup(props, context) {
      const { activeKey, handleChange } = useSegments("/components/button");

      return {
        activeKey,
        handleChange
      };
    }
  });
</script>