const code =
`<template>
  <div class="example-menu-switch-mode">
    <section>
      <vui-radio-group type="button" v-model:value="mode">
        <vui-radio value="vertical">Vertical</vui-radio>
        <vui-radio value="inline">Inline</vui-radio>
      </vui-radio-group>
      <vui-radio-group type="button" v-model:value="color">
        <vui-radio value="light">Light</vui-radio>
        <vui-radio value="dark">Dark</vui-radio>
      </vui-radio-group>
    </section>
    <vui-menu
      v-bind:mode="mode"
      v-bind:color="color"
      v-model:selectedKey="selectedKey"
    >
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const mode = ref<string>("vertical");
      const color = ref<string>("light");
      const selectedKey = ref<string>("1");

      return {
        mode,
        color,
        selectedKey
      };
    }
  });
</script>

<style>
  .example-menu-switch-mode > section > .vui-radio-group + .vui-radio-group { margin-left:16px; }
  .example-menu-switch-mode > .vui-menu { width:240px; border-right:1px solid #e6e6e6; margin-top:16px; }
</style>
`;

export default code;