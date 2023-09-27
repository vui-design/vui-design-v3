<template>
  <vui-example id="example-button-icon-and-shape" v-bind:code="code">
    <template v-slot:title>图标以及形状</template>
    <template v-slot:description>
      <p>如果需要在 <code>Button</code> 内插入一个图标，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。</p>
      <p>使用 <code>Button</code> 的 <code>icon</code> 属性，图标将被插入到按钮左侧，如果需要自定义位置，请使用 <code>Icon</code> 组件。</p>
      <p>属性 <code>shape</code> 用于设置按钮形状，可选值为 <code>round</code>、<code>circle</code>，或者不设。</p>
    </template>
    <template v-slot:demo>
      <div class="example-button-icon-and-shape">
        <vui-space block wrap v-bind:gutter="16">
          <vui-button type="primary" icon="search">Search</vui-button>
          <vui-button type="primary" icon="search" shape="round">Search</vui-button>
          <vui-button type="primary" icon="search" shape="circle" />
          <vui-button type="primary" shape="round">
            More<vui-icon type="more-x" />
          </vui-button>
          <vui-button type="primary" shape="circle">
            <vui-icon type="more-x" />
          </vui-button>
        </vui-space>
        <vui-space block wrap v-bind:gutter="16">
          <vui-button icon="search">Search</vui-button>
          <vui-button icon="search" shape="round">Search</vui-button>
          <vui-button icon="search" shape="circle" />
          <vui-button shape="round">
            More<vui-icon type="more-x" />
          </vui-button>
          <vui-button shape="circle">
            <vui-icon type="more-x" />
          </vui-button>
        </vui-space>
      </div>
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

<style>
  .example-button-icon-and-shape .vui-space + .vui-space { margin-top:16px; }
</style>