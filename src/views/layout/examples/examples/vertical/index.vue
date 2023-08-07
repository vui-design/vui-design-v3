<template>
  <vui-example id="example-layout-vertical" v-bind:code="code">
    <template v-slot:title>上中下布局</template>
    <template v-slot:description>
      <p>最基本的『上-中-下』垂直布局。</p>
      <p>一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。</p>
    </template>
    <template v-slot:demo>
      <vui-browser>
        <vui-layout>
          <vui-layout-header color="dark">
            <h1 style="float: left; width: 128px; height: 32px; background-color: rgba(255,255,255,0.2); margin: 16px 0;" />
            <vui-menu
              mode="horizontal"
              color="dark"
              style="float: left; margin-left: 24px; line-height: 64px;"
              v-model:selectedKey="selectedKey"
            >
              <vui-menu-item key="1" title="Nav 1" />
              <vui-menu-item key="2" title="Nav 2" />
              <vui-menu-item key="3" title="Nav 3" />
            </vui-menu>
          </vui-layout-header>
          <vui-layout-content style="padding: 0 48px;">
            <vui-breadcrumb style="margin: 24px 0;">
              <vui-breadcrumb-item>Home</vui-breadcrumb-item>
              <vui-breadcrumb-item>Components</vui-breadcrumb-item>
              <vui-breadcrumb-item>Layout</vui-breadcrumb-item>
            </vui-breadcrumb>
            <div style="min-height: 280px; background-color: #fff; padding: 24px;">Content</div>
          </vui-layout-content>
          <vui-layout-footer style="text-align: center;">2010-2020 © EXAMPLE</vui-layout-footer>
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
      const selectedKey = ref<string>("1");

      return {
        code,
        selectedKey
      };
    }
  });
</script>