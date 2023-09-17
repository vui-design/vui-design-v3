const code =
`<template>
  <vui-fullscreen v-model:enabled="fullscreen" class="example-fullscreen-basic-usage">
    <vui-layout>
      <vui-layout-sider color="dark">
        <h1 style="height: 32px; background-color: rgba(255,255,255,0.2); margin: 16px;"></h1>
        <vui-menu
          mode="inline"
          color="dark"
          v-bind:defaultOpenKeys="['1']"
          v-bind:defaultSelectedKey="'1-1'"
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
        <vui-layout-header color="light" style="padding: 0 24px;">
          <a href="javascript:;" class="btn-fullscreen" v-on:click="handleToggle">
            <vui-icon v-if="fullscreen" type="fullscreen-exit" />
            <vui-icon v-else type="fullscreen" />
          </a>
        </vui-layout-header>
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
  </vui-fullscreen>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const fullscreen = ref<boolean>(false);
      const handleToggle = () => fullscreen.value = !fullscreen.value;

      return {
        fullscreen,
        handleToggle
      };
    }
  });
</script>

<style>
  .example-fullscreen-basic-usage .btn-fullscreen { float:right; display:flex; justify-content:center; align-items:center; height:100%; }
  .example-fullscreen-basic-usage.vui-fullscreen-enabled .vui-layout { height:100%; }
</style>
`;

export default code;