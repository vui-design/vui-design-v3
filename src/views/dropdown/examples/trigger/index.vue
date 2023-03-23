<template>
  <vui-example id="example-dropdown-trigger" v-bind:code="code">
    <template v-slot:demo>
      <vui-dropdown trigger="click">
        <vui-link type="primary">
          Click me<vui-icon type="chevron-down" />
        </vui-link>
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
    <template v-slot:title>触发方式</template>
    <template v-slot:description>
      <p>默认是移入触发菜单，可以点击触发。</p>
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