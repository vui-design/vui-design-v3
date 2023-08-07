<template>
  <vui-example id="example-dropdown-button" v-bind:code="code">
    <template v-slot:title>带下拉框的按钮</template>
    <template v-slot:description>
      <p>左侧是常规按钮，右侧是额外的相关功能菜单，可通过 <code>icon</code> 属性来修改右侧按钮的图标。</p>
    </template>
    <template v-slot:demo>
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
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const handleClick = (e: MouseEvent) => {
        Message.info("Clicked on button");
      };
      const handleMenuClick = (key: string) => {
        Message.info("Clicked on Menu Item " + key);
      };

      return {
        code,
        handleClick,
        handleMenuClick
      };
    }
  });
</script>

<style>
  .example-dropdown-button .vui-dropdown-button + .vui-dropdown-button { margin-left:16px; }
</style>