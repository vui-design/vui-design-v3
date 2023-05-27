const code =
`<template>
  <vui-dropdown>
    <vui-link type="primary">
      Hover me, and click menu item<vui-icon type="chevron-down" />
    </vui-link>
    <template v-slot:menu>
      <vui-menu v-on:click="handleClick">
        <vui-menu-item key="1" title="Menu Item 1" />
        <vui-menu-item key="2" title="Menu Item 2" />
        <vui-menu-item key="3" title="Menu Item 3" />
        <vui-menu-item key="4" title="Menu Item 4" />
      </vui-menu>
    </template>
  </vui-dropdown>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const handleClick = (key: string) => {
        Message.info("Clicked in Menu Item " + key);
      };

      return {
        handleClick
      };
    }
  });
</script>
`;

export default code;