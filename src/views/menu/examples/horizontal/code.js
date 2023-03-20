const code =
`<template>
  <div class="example-menu-horizontal">
    <vui-menu mode="horizontal" v-model:selectedKey="selectedKey">
      <vui-menu-item key="1" icon="apps" title="Navigation 1" />
      <vui-menu-item key="2" icon="mail" title="Navigation 2" disabled />
      <vui-submenu key="3" icon="settings" title="Navigation 3 - Submenu">
        <vui-menu-item-group title="Group 1">
          <vui-menu-item key="3-1" title="Item 1" />
          <vui-menu-item key="3-2" title="Item 2" />
        </vui-menu-item-group>
        <vui-menu-item-group title="Group 2">
          <vui-menu-item key="3-3" title="Item 3" />
          <vui-menu-item key="3-4" title="Item 4" />
        </vui-menu-item-group>
      </vui-submenu>
      <vui-menu-item key="4" icon="links" title="Navigation 4 - Link" href="https://cn.vuejs.org/" target="_blank" />
    </vui-menu>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const selectedKey = ref<string>("1");

      return {
        selectedKey
      };
    }
  });
</script>

<style>
  .example-menu-horizontal { box-shadow:0 -1px 0 #e6e6e6 inset; }
</style>
`;

export default code;