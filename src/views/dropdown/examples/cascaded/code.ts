const code =
`<template>
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
        <vui-submenu key="5" disabled title="Submenu 1">
          <vui-menu-item key="5-1" title="Menu Item 5-1" />
          <vui-menu-item key="5-2" title="Menu Item 5-2" />
        </vui-submenu>
        <vui-submenu key="6" title="Submenu 2">
          <vui-menu-item key="6-1" title="Menu Item 6-1" />
          <vui-menu-item key="6-2" title="Menu Item 6-2" />
        </vui-submenu>
      </vui-menu>
    </template>
  </vui-dropdown>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const handleClick = (key: string) => {
        console.log(key);
      };

      return {
        handleClick
      };
    }
  });
</script>
`;

export default code;