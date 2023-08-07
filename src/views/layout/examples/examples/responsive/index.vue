<template>
  <vui-example id="example-layout-responsive" v-bind:code="code">
    <template v-slot:title>响应式布局</template>
    <template v-slot:description>
      <p><code>Sider</code> 支持响应式布局。</p>
      <p>配置 <code>breakpoint</code> 属性即可生效，视窗宽度小于 <code>breakpoint</code> 时 <code>Sider</code> 缩小为 <code>collapsedWidth</code> 宽度。</p>
    </template>
    <template v-slot:demo>
      <vui-browser>
        <vui-layout>
          <vui-layout-sider color="dark" breakpoint="lg" v-bind:collapsedWidth="80" v-on:collapse="handleCollapse" v-on:breakpoint="handleBreakpoint">
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
      </vui-browser>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import VuiBrowser from "../../../../../components/browser/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample,
      VuiBrowser
    },
    setup() {
      const collapsed = ref<boolean>(false);
      const openKeys = ref<string[]>(["1"])
      const selectedKey = ref<string>("1-1");

      const handleCollapse = (newCollapsed: boolean, type: string) => {
        console.log(newCollapsed, type);
        collapsed.value = newCollapsed;
      };
      const handleBreakpoint = (broken: boolean) => {
        console.log(broken);
      };

      return {
        code,
        collapsed,
        openKeys,
        selectedKey,
        handleCollapse,
        handleBreakpoint
      };
    }
  });
</script>