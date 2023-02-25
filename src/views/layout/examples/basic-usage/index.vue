<template>
  <vui-example id="example-layout-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-layout-basic-usage">
        <vui-layout>
          <vui-layout-header>Header</vui-layout-header>
          <vui-layout-content>Content</vui-layout-content>
          <vui-layout-footer>Footer</vui-layout-footer>
        </vui-layout>
        <vui-layout>
          <vui-layout-header>Header</vui-layout-header>
          <vui-layout>
            <vui-layout-sider>Sider</vui-layout-sider>
            <vui-layout-content>Content</vui-layout-content>
          </vui-layout>
          <vui-layout-footer>Footer</vui-layout-footer>
        </vui-layout>
        <vui-layout>
          <vui-layout-header>Header</vui-layout-header>
          <vui-layout>
            <vui-layout-content>Content</vui-layout-content>
            <vui-layout-sider>Sider</vui-layout-sider>
          </vui-layout>
          <vui-layout-footer>Footer</vui-layout-footer>
        </vui-layout>
        <vui-layout>
          <vui-layout-sider>Sider</vui-layout-sider>
          <vui-layout>
            <vui-layout-header>Header</vui-layout-header>
            <vui-layout-content>Content</vui-layout-content>
            <vui-layout-footer>Footer</vui-layout-footer>
          </vui-layout>
        </vui-layout>
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>典型的页面布局。</p>
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

<style>
  .example-layout-basic-usage .vui-layout + .vui-layout { margin-top:24px; }
  .example-layout-basic-usage .vui-layout-header,
  .example-layout-basic-usage .vui-layout-footer { background-color:rgba(45,140,240,0.7); color:#fff; text-align:center; }
  .example-layout-basic-usage .vui-layout-sider { background-color:rgba(45,140,240,0.85); color:#fff; text-align:center; line-height:120px; }
  .example-layout-basic-usage .vui-layout-content { background-color:rgba(45,140,240,1); color:#fff; text-align:center; line-height:120px; }
</style>