<template>
  <vui-example id="example-dropdown-contextmenu" v-bind:code="code">
    <template v-slot:title>右键菜单</template>
    <template v-slot:description>
      <p>默认是移入触发菜单，可以点击鼠标右键触发。</p>
    </template>
    <template v-slot:demo>
      <vui-dropdown trigger="contextmenu">
        <div style="height: 200px; background-color: #f6f6f6; text-align: center; line-height: 200px;">
          Right click on here
        </div>
        <template v-slot:menu>
          <vui-menu>
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
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>