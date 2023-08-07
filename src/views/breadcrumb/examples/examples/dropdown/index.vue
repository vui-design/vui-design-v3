<template>
  <vui-example id="example-breadcrumb-dropdown" v-bind:code="code">
    <template v-slot:title>带下拉菜单的面包屑</template>
    <template v-slot:description>
      <p>面包屑支持下拉菜单。</p>
    </template>
    <template v-slot:demo>
      <vui-breadcrumb>
        <vui-breadcrumb-item>Home</vui-breadcrumb-item>
        <vui-breadcrumb-item>Components</vui-breadcrumb-item>
        <vui-breadcrumb-item>
          Navigation
          <template v-slot:menu>
            <vui-menu>
              <vui-menu-item key="anchor" title="Anchor" />
              <vui-menu-item key="breadcrumb" title="Breadcrumb" />
              <vui-menu-item key="dropdown" title="Dropdown" />
              <vui-menu-item key="menu" title="Menu" />
            </vui-menu>
          </template>
        </vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
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