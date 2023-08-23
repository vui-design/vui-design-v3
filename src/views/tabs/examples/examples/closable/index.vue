<template>
  <vui-example id="example-tabs-closable" v-bind:code="code">
    <template v-slot:title>动态关闭</template>
    <template v-slot:description>
      <p>结合 <code>closable</code> 属性和 <code>close</code> 事件实现动态关闭页签。</p>
      <p>可以显式设置某个 <code>TabPanel</code> 的 <code>closable</code> 属性为 <code>false</code>，禁止其关闭。</p>
    </template>
    <template v-slot:demo>
      <vui-tabs type="card" v-model:activeKey="activeKey" closable v-on:close="handleClose">
        <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">
          {{tab.content}}
        </vui-tab-panel>
      </vui-tabs>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  interface Tab {
    key: string;
    title: string;
    content: string;
    closable?: boolean;
  };

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      let tabs = ref<Tab[]>([]);
      let activeKey = ref<string>();
      let index = ref<number>(1);

      for (; index.value < 4; index.value++) {
        const tab: Tab = {
          key: `tab${index.value}`,
          title: `Tab${index.value}`,
          content: `Content of Tab panel ${index.value}`
        };

        if (index.value === 1) {
          tab.closable = false;
        }

        tabs.value.push(tab);
      }

      activeKey.value = tabs.value[0].key;

      const handleClose = (key: string) => {
        tabs.value = tabs.value.filter((tab: Tab) => tab.key !== key);
      };

      return {
        code,
        tabs,
        activeKey,
        handleClose
      };
    }
  });
</script>