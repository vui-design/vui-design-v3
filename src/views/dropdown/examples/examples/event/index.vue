<template>
  <vui-example id="example-dropdown-event" v-bind:code="code">
    <template v-slot:title>触发事件</template>
    <template v-slot:description>
      <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>
    </template>
    <template v-slot:demo>
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
      const handleClick = (key: string) => {
        Message.info("Clicked in Menu Item " + key);
      };

      return {
        code,
        handleClick
      };
    }
  });
</script>