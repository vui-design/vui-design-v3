const code =
`<template>
  <div class="example-tabs-size">
    <vui-radio-group type="button" v-model:value="size">
      <vui-radio value="small" label="Small" />
      <vui-radio value="medium" label="Medium" />
      <vui-radio value="large" label="Large" />
    </vui-radio-group>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  interface Tab {
    key: string;
    title: string;
    content: string;
  };

  export default defineComponent({
    setup() {
      let tabs = ref<Tab[]>([]);
      let activeKey = ref<string>();
      let index = ref<number>(1);
      let size = ref<string>("medium");

      for (; index.value < 4; index.value++) {
        const tab: Tab = {
          key: \`tab\$\{index.value\}\`,
          title: \`Tab\$\{index.value\}\`,
          content: \`Content of Tab panel \$\{index.value\}\`
        };

        tabs.value.push(tab);
      }

      activeKey.value = tabs.value[0].key;

      return {
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
`;

export default code;