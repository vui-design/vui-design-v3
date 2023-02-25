<template>
  <vui-example id="example-space-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-space>
        Space
        <vui-button type="primary">Button</vui-button>
        <vui-dropdown placement="bottom-left">
          <vui-button>Dropdown</vui-button>
          <template v-slot:menu>
            <vui-dropdown-menu>
              <vui-dropdown-menu-item key="1" title="Menu Item 1" />
              <vui-dropdown-menu-item key="2" title="Menu Item 2" />
              <vui-dropdown-menu-item key="3" title="Menu Item 3" />
              <vui-dropdown-menu-item key="4" title="Menu Item 4" />
            </vui-dropdown-menu>
          </template>
        </vui-dropdown>
        <vui-popconfirm title="Are you sure delete this task?" cancelText="No" okText="Yes">
          <vui-button type="dashed">Delete</vui-button>
        </vui-popconfirm>
      </vui-space>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>相邻组件水平间距。</p>
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