<template>
  <vui-example id="example-tabs-addable" v-bind:code="code">
    <template v-slot:title>动态添加</template>
    <template v-slot:description>
      <p>结合 <code>addable</code> 属性和 <code>add</code> 事件实现动态添加页签。</p>
    </template>
    <template v-slot:demo>
      <vui-tabs type="card" v-model:activeKey="activeKey" addable v-on:add="handleAdd">
        <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
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

        tabs.value.push(tab);
      }

      activeKey.value = tabs.value[0].key;

      const handleAdd = () => {
        const tab: Tab = {
          key: `tab${index.value}`,
          title: `Tab${index.value}`,
          content: `Content of Tab panel ${index.value}`
        };

        tabs.value.push(tab);
        activeKey.value = tab.key;
        index.value++;
      };

      return {
        code,
        tabs,
        activeKey,
        handleAdd
      };
    }
  });
</script>