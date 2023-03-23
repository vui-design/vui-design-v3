const code =
`<template>
  <div class="example-dropdown-button">
    <vui-dropdown-button v-on:click="handleClick">
      Button
      <template v-slot:menu>
        <vui-menu v-on:click="handleMenuClick">
          <vui-menu-item key="1" title="Menu Item 1" />
          <vui-menu-item key="2" title="Menu Item 2" />
          <vui-menu-item key="3" title="Menu Item 3" />
          <vui-menu-item key="4" title="Menu Item 4" />
        </vui-menu>
      </template>
    </vui-dropdown-button>
    <vui-dropdown-button disabled v-on:click="handleClick">
      Button
      <template v-slot:menu>
        <vui-menu v-on:click="handleMenuClick">
          <vui-menu-item key="1" title="Menu Item 1" />
          <vui-menu-item key="2" title="Menu Item 2" />
          <vui-menu-item key="3" title="Menu Item 3" />
          <vui-menu-item key="4" title="Menu Item 4" />
        </vui-menu>
      </template>
    </vui-dropdown-button>
    <vui-dropdown-button icon="user" v-on:click="handleClick">
      Button
      <template v-slot:menu>
        <vui-menu v-on:click="handleMenuClick">
          <vui-menu-item key="1" title="Menu Item 1" />
          <vui-menu-item key="2" title="Menu Item 2" />
          <vui-menu-item key="3" title="Menu Item 3" />
          <vui-menu-item key="4" title="Menu Item 4" />
        </vui-menu>
      </template>
    </vui-dropdown-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const handleClick = (e: MouseEvent) => {
        console.log("Clicked on button");
      };
      const handleMenuClick = (key: string) => {
        console.log("Clicked on Menu Item " + key);
      };

      return {
        handleClick,
        handleMenuClick
      };
    }
  });
</script>

<style>
  .example-dropdown-button .vui-dropdown-button + .vui-dropdown-button { margin-left:16px; }
</style>
`;

export default code;