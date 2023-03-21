const code =
`<template>
  <vui-layout>
    <vui-layout-sider color="dark" collapsible v-model:collapsed="collapsed">
      <h1 style="height: 32px; background-color: rgba(255,255,255,0.2); margin: 16px;"></h1>
      <vui-menu
        mode="inline"
        color="dark"
        v-model:collapsed="collapsed"
        v-model:openKeys="openKeys"
        v-model:selectedKey="selectedKey"
      >
        <vui-submenu key="1" icon="apps" title="Sub Menu 1">
          <vui-menu-item key="1-1" title="Item 1-1" />
          <vui-menu-item key="1-2" title="Item 1-2" />
          <vui-menu-item key="1-3" title="Item 1-3" />
          <vui-menu-item key="1-4" title="Item 1-4" />
        </vui-submenu>
        <vui-submenu key="2" icon="mail" title="Sub Menu 2">
          <vui-menu-item key="2-1" title="Item 2-1" />
          <vui-menu-item key="2-2" title="Item 2-2" />
          <vui-menu-item key="2-3" title="Item 2-3" />
          <vui-menu-item key="2-4" title="Item 2-4" />
        </vui-submenu>
        <vui-submenu key="3" icon="settings" title="Sub Menu 3">
          <vui-menu-item key="3-1" title="Item 3-1" />
          <vui-menu-item key="3-2" title="Item 3-2" />
          <vui-menu-item key="3-3" title="Item 3-3" />
          <vui-menu-item key="3-4" title="Item 3-4" />
        </vui-submenu>
      </vui-menu>
    </vui-layout-sider>
    <vui-layout>
      <vui-layout-header color="light" style="padding: 0 24px;"></vui-layout-header>
      <vui-layout-content style="padding: 0 24px;">
        <vui-breadcrumb style="margin: 24px 0;">
          <vui-breadcrumb-item>Home</vui-breadcrumb-item>
          <vui-breadcrumb-item>Components</vui-breadcrumb-item>
          <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
        </vui-breadcrumb>
        <div style="min-height: 320px; background-color: #fff; padding: 24px;">Content</div>
      </vui-layout-content>
      <vui-layout-footer style="padding: 24px; text-align: center;">2010-2020 © EXAMPLE</vui-layout-footer>
    </vui-layout>
  </vui-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const collapsed = ref<boolean>(false);
      const openKeys = ref<string[]>(["1"])
      const selectedKey = ref<string>("1-1");

      return {
        collapsed,
        openKeys,
        selectedKey
      };
    }
  });
</script>
`;

export default code;