<template>
  <vui-example id="example-layout-sider" v-bind:code="code">
    <template v-slot:demo>
      <vui-browser>
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
      </vui-browser>
    </template>
    <template v-slot:title>侧边布局</template>
    <template v-slot:description>
      <p>侧边两列式布局。页面横向空间有限时，侧边导航可收起。</p>
      <p>侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部分。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import VuiBrowser from "../../../../components/browser/index.vue";
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

      return {
        code,
        collapsed,
        openKeys,
        selectedKey
      };
    }
  });
</script>