const code =
`<template>
  <vui-layout>
    <vui-layout-header color="dark">
      <h1 style="float: left; width: 124px; height: 32px; background-color: rgba(255,255,255,0.2); margin: 16px 0;"></h1>
      <vui-menu
        mode="horizontal"
        color="dark"
        v-bind:selectedKeys="selectedKeys1"
        style="float: left; margin-left: 24px; line-height: 64px;"
      >
        <vui-menu-item key="1" title="Item 1" />
        <vui-menu-item key="2" title="Item 2" />
        <vui-menu-item key="3" title="Item 3" />
      </vui-menu>
    </vui-layout-header>
    <vui-layout-content style="padding: 0 48px;">
      <vui-breadcrumb style="margin: 24px 0;">
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
      </vui-breadcrumb>
      <vui-layout>
        <vui-layout-sider v-bind:width="200" style="border-right: 1px solid #f0f0f0;">
          <vui-menu
            mode="inline"
            v-bind:openKeys="openKeys2"
            v-bind:selectedKeys="selectedKeys2"
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
        <vui-layout-content style="min-height: 280px; background-color: #fff; padding: 24px;">Content</vui-layout-content>
      </vui-layout>
    </vui-layout-content>
    <vui-layout-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-layout-footer>
  </vui-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const selectedKeys1 = ref("1");
      const openKeys2 = ref(["1"])
      const selectedKeys2 = ref("1-1");

      return {
        selectedKeys1,
        openKeys2,
        selectedKeys2
      };
    }
  });
</script>
`;

export default code;