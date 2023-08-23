const code =
`<template>
  <vui-tabs type="card" v-model:activeKey="activeKey">
    <vui-tab-panel key="tab1" title="Tab 1">Content of Tab Panel 1</vui-tab-panel>
    <vui-tab-panel key="tab2" title="Tab 2">Content of Tab Panel 2</vui-tab-panel>
    <vui-tab-panel key="tab3" title="Tab 3">Content of Tab Panel 3</vui-tab-panel>
  </vui-tabs>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const activeKey = ref<string>("tab1");

      return {
        activeKey
      };
    }
  });
</script>
`;

export default code;