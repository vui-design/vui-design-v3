<template>
  <vui-example id="example-dropdown-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-dropdown>
        <vui-link type="primary">
          Hover me<vui-icon type="chevron-down" />
        </vui-link>
        <template v-slot:menu>
          <vui-menu>
            <vui-menu-item key="1" title="Menu Item 1" />
            <vui-menu-item key="2" title="Menu Item 2" />
            <vui-menu-item key="3" title="Menu Item 3" />
            <vui-menu-item key="4" danger title="Menu Item danger" />
          </vui-menu>
        </template>
      </vui-dropdown>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的下拉菜单。</p>
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
      return {
        code
      };
    }
  });
</script>