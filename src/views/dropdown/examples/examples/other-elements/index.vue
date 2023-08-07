<template>
  <vui-example id="example-dropdown-other-elements" v-bind:code="code">
    <template v-slot:title>其他元素</template>
    <template v-slot:description>
      <p>分割线和不可用菜单项。</p>
    </template>
    <template v-slot:demo>
      <vui-dropdown>
        <vui-link type="primary">
          Hover me<vui-icon type="chevron-down" />
        </vui-link>
        <template v-slot:menu>
          <vui-menu>
            <vui-menu-item key="1" title="Menu Item 1" />
            <vui-menu-item key="2" title="Menu Item 2" />
            <vui-menu-item disabled key="3" title="Menu Item 3" />
            <vui-menu-item-divider />
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