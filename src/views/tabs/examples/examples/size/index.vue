<template>
  <vui-example id="example-tabs-size" v-bind:code="code">
    <template v-slot:title>页签尺寸</template>
    <template v-slot:description>
      <p>大号用在页头区域，小号则建议用在弹出框等较狭窄的容器内。</p>
    </template>
    <template v-slot:demo>
      <div class="example-tabs-size">
        <vui-segments v-model:activeKey="size">
          <vui-segments-item key="small">Small</vui-segments-item>
          <vui-segments-item key="medium">Medium</vui-segments-item>
          <vui-segments-item key="large">Large</vui-segments-item>
        </vui-segments>
        <vui-tabs v-bind:size="size">
          <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
            {{tab.content}}
          </vui-tab-panel>
        </vui-tabs>
        <vui-tabs type="card" v-bind:size="size">
          <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
            {{tab.content}}
          </vui-tab-panel>
        </vui-tabs>
      </div>
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
      let size = ref<string>("medium");

      for (; index.value < 4; index.value++) {
        const tab: Tab = {
          key: `tab${index.value}`,
          title: `Tab${index.value}`,
          content: `Content of Tab panel ${index.value}`
        };

        tabs.value.push(tab);
      }

      activeKey.value = tabs.value[0].key;

      return {
        code,
        tabs,
        activeKey,
        size
      };
    }
  });
</script>

<style>
  .example-tabs-size .vui-tabs { margin-top:32px; }
</style>