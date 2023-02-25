<template>
  <vui-example id="example-layout-custom-trigger" v-bind:code="code">
    <template v-slot:demo>
      <vui-browser>
        <vui-layout>
          <vui-layout-sider color="dark" collapsible v-bind:collapsed="collapsed" v-bind:showTrigger="false">
            <h1 style="height: 32px; background-color: rgba(255,255,255,0.2); margin: 16px;"></h1>
            <!--
            <vui-menu
              mode="inline"
              color="dark"
              v-bind:collapsed="collapsed"
              v-bind:openKeys="openKeys"
              v-bind:selectedKeys="selectedKeys"
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
            -->
          </vui-layout-sider>
          <vui-layout>
            <vui-layout-header color="light" style="padding: 0 24px;">
              <vui-button
                size="small"
                style="float: left; margin: 20px 0;"
                v-bind:icon="btnTriggerType"
                v-on:click="handleCollapse"
              />
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
      </vui-browser>
    </template>
    <template v-slot:title>自定义触发器</template>
    <template v-slot:description>
      <p>自定义触发器时，可以将 <code>showTrigger</code> 设为 <code>false</code> 来隐藏默认设定。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import VuiBrowser from "../../../../components/browser/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample,
      VuiBrowser
    },
    setup() {
      const collapsed = ref(false);
      const openKeys = ref(["1"])
      const selectedKeys = ref("1-1");
      const btnTriggerType = computed(() => collapsed.value ? "menu-unfold" : "menu-fold");

      const handleCollapse = () => {
        collapsed.value = !collapsed.value;
      };

      return {
        code,
        collapsed,
        openKeys,
        selectedKeys,
        btnTriggerType,
        handleCollapse
      };
    }
  });
</script>