<template>
  <vui-example id="example-menu-inline-collapsed" v-bind:code="code">
    <template v-slot:title>折叠内嵌菜单</template>
    <template v-slot:description>
      <p>内嵌菜单可以被折叠或展开。</p>
    </template>
    <template v-slot:demo>
      <div class="example-menu-inline-collapsed">
        <vui-button v-on:click="handleToggleCollapsed">
          <vui-icon v-bind:type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </vui-button>
        <vui-menu mode="inline" v-model:collapsed="collapsed" v-model:selectedKey="selectedKey">
          <vui-menu-item key="1" icon="pie-chart" title="Navigation 1" />
          <vui-menu-item key="2" icon="computer" title="Navigation 2" disabled />
          <vui-submenu key="3" icon="inbox" title="Navigation 3 - Submenu">
            <vui-menu-item key="3-1" title="Item 3-1" />
            <vui-menu-item key="3-2" title="Item 3-2" />
            <vui-submenu key="3-3" title="Item 3-3">
              <vui-menu-item key="3-3-1" title="Item 3-3-1" />
              <vui-menu-item key="3-3-2" title="Item 3-3-2" />
            </vui-submenu>
          </vui-submenu>
          <vui-submenu key="4" icon="mail" title="Navigation 4 - Group">
            <vui-menu-item-group title="Group 1">
              <vui-menu-item key="4-1" title="Item 4-1" />
              <vui-menu-item key="4-2" title="Item 4-2" />
            </vui-menu-item-group>
            <vui-menu-item-group title="Group 2">
              <vui-menu-item key="4-3" title="Item 4-3" />
              <vui-menu-item key="4-4" title="Item 4-4" />
            </vui-menu-item-group>
          </vui-submenu>
          <vui-menu-item key="5" icon="links" title="Navigation 5 - Link" href="https://cn.vuejs.org/" target="_blank" />
        </vui-menu>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const collapsed = ref<boolean>(false);
      const selectedKey = ref<string>("1");

      const handleToggleCollapsed = () => collapsed.value = !collapsed.value;

      return {
        code,
        collapsed,
        selectedKey,
        handleToggleCollapsed
      };
    }
  });
</script>

<style>
  .example-menu-inline-collapsed { width:240px; }
  .example-menu-inline-collapsed > .vui-menu { border-right:1px solid #e6e6e6; margin-top:16px; }
</style>