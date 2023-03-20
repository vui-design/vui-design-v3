<template>
  <vui-example id="example-menu-inline" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-menu-inline">
        <vui-menu mode="inline" v-model:selectedKey="selectedKey">
          <vui-submenu key="1" icon="apps" title="Navigation 1">
            <vui-menu-item key="1-1" title="Item 1-1" />
            <vui-menu-item key="1-2" title="Item 1-2" />
            <vui-menu-item key="1-3" title="Item 1-3" />
            <vui-menu-item key="1-4" title="Item 1-4" />
          </vui-submenu>
          <vui-menu-item key="2" icon="mail" title="Navigation 2" />
          <vui-submenu key="3" icon="settings" title="Navigation 3">
            <vui-menu-item-group title="Group 1">
              <vui-menu-item key="3-1" title="Item 3-1" />
              <vui-menu-item key="3-2" title="Item 3-2" />
            </vui-menu-item-group>
            <vui-menu-item-group title="Group 2">
              <vui-menu-item key="3-3" title="Item 3-3" />
              <vui-menu-item key="3-4" title="Item 3-4" />
            </vui-menu-item-group>
          </vui-submenu>
          <vui-submenu key="4" icon="links" title="Navigation 4">
            <vui-menu-item key="4-1" title="Item 4-1" />
            <vui-menu-item key="4-2" title="Item 4-2" />
            <vui-submenu key="4-3" title="Item 4-3">
              <vui-menu-item key="4-3-1" title="Item 4-3-1" />
              <vui-menu-item key="4-3-2" title="Item 4-3-2" />
            </vui-submenu>
          </vui-submenu>
        </vui-menu>
      </div>
    </template>
    <template v-slot:title>内嵌菜单</template>
    <template v-slot:description>
      <p>垂直的侧栏导航菜单，子菜单是内嵌式的。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const selectedKey = ref<string>("1-1");

      return {
        code,
        selectedKey
      };
    }
  });
</script>

<style>
  .example-menu-inline { width:240px; border-right:1px solid #e6e6e6; }
</style>