const code =
`<template>
  <vui-tabs type="card" v-model:activeKey="activeKey" addable v-on:add="handleAdd">
    <vui-tab-panel v-for="tab in tabs" v-bind:key="tab.key" v-bind:title="tab.title">
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

      return {
        tabs,
        activeKey,
        handleAdd
      };
    }
  });
</script>
`;

export default code;