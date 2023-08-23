const code =
`<template>
  <div class="example-tabs-editable">
    <vui-tabs v-model:activeKey="activeKey" addable closable v-on:add="handleAdd" v-on:close="handleClose">
      <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
        {{tab.content}}
      </vui-tab-panel>
    </vui-tabs>
    <vui-tabs type="card" v-model:activeKey="activeKey" addable closable v-on:add="handleAdd" v-on:close="handleClose">
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
    closable?: boolean;
  };

  export default defineComponent({
    setup() {
      let tabs = ref<Tab[]>([]);
      let activeKey = ref<string>();
      let index = ref<number>(1);

      for (; index.value < 4; index.value++) {
        const tab: Tab = {
          key: \`tab\$\{index.value\}\`,
          title: \`Tab\$\{index.value\}\`,
          content: \`Content of Tab panel \$\{index.value\}\`
        };

        if (index.value === 1) {
          tab.closable = false;
        }

        tabs.value.push(tab);
      }

      activeKey.value = tabs.value[0].key;

      const handleAdd = () => {
        const tab: Tab = {
          key: \`tab\$\{index.value\}\`,
          title: \`Tab\$\{index.value\}\`,
          content: \`Content of Tab panel \$\{index.value\}\`
        };

        tabs.value.push(tab);
        activeKey.value = tab.key;
        index.value++;
      };

      const handleClose = (key: string) => {
        tabs.value = tabs.value.filter((tab: Tab) => tab.key !== key);
      };

      return {
        tabs,
        activeKey,
        handleAdd,
        handleClose
      };
    }
  });
</script>

<style>
  .example-tabs-editable .vui-tabs + .vui-tabs { margin-top:32px; }
</style>
`;

export default code;