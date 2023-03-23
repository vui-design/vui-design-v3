<template>
  <vui-example id="example-dropdown-cascaded" v-bind:code="code">
    <template v-slot:demo>
      <vui-dropdown>
        <a href="javascript:;">Hover me</a>
        <template v-slot:menu>
          <vui-menu v-on:click="handleClick">
            <vui-menu-item key="1" title="Menu Item 1" />
            <vui-menu-item key="2" title="Menu Item 2" />
            <vui-menu-item-group title="Group Title">
              <vui-menu-item key="3" title="Menu Item 3" />
              <vui-menu-item key="4" title="Menu Item 4" />
            </vui-menu-item-group>
            <vui-submenu key="5" disabled title="Submenu One">
              <vui-menu-item key="5-1" title="Menu Item 5-1" />
              <vui-menu-item key="5-2" title="Menu Item 5-2" />
            </vui-submenu>
            <vui-submenu key="6" title="Submenu Two">
              <vui-menu-item key="6-1" title="Menu Item 6-1" />
              <vui-menu-item key="6-2" title="Menu Item 6-2" />
            </vui-submenu>
          </vui-menu>
        </template>
      </vui-dropdown>
    </template>
    <template v-slot:title>级联菜单</template>
    <template v-slot:description>
      <p>传入的菜单里有多个层级。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const handleClick = (key: string) => {
        console.log(key);
      };

      return {
        code,
        handleClick
      };
    }
  });
</script>