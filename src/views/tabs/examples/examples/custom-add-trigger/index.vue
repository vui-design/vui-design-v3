<template>
  <vui-example id="example-tabs-custom-add-trigger" v-bind:code="code">
    <template v-slot:title>自定义添加触发器</template>
    <template v-slot:description>
      <p>通过给自定义触发器绑定事件实现动态添加页签。</p>
    </template>
    <template v-slot:demo>
      <vui-tabs type="card" v-model:activeKey="activeKey" closable v-on:close="handleClose">
        <template v-slot:extra>
          <vui-link type="primary" icon="plus" block v-on:click="handleAdd">Add</vui-link>
        </template>
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

      const handleClose = (key: string) => {
        tabs.value = tabs.value.filter((tab: Tab) => tab.key !== key);
      };

      return {
        code,
        tabs,
        activeKey,
        handleAdd,
        handleClose
      };
    }
  });
</script>