const code =
`<template>
  <vui-tabs type="card" v-model:activeKey="activeKey" closable v-on:close="handleClose">
    <template v-slot:extra>
      <vui-link type="primary" icon="plus" block v-on:click="handleAdd">Add</vui-link>
    </template>
    <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title" v-bind:closable="tab.closable">
      {{tab.content}}
    </vui-tab-panel>
  </vui-tabs>
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
          title: \`Tab$\{index.value\}\`,
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
`;

export default code;