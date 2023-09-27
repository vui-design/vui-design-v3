<template>
  <vui-example id="example-breadcrumb-link" v-bind:code="code">
    <template v-slot:title>可点击的</template>
    <template v-slot:description>
      <p>属性 <code>href</code> 用于设置项目点击后的跳转地址，指定此属性后项目的点击行为将和普通 <code>a</code> 链接保持一致。</p>
      <p>当需要支持用户在具有路由功能的应用中导航时，您可以显式地使用 <code>&lt;RouterLink /&gt;</code> 组件。</p>
    </template>
    <template v-slot:demo>
      <div>
        <div class="example-breadcrumb-link">
          <vui-divider orientation="left">A Link</vui-divider>
          <vui-breadcrumb>
            <vui-breadcrumb-item href="/">Home</vui-breadcrumb-item>
            <vui-breadcrumb-item href="/components" target="_blank">Components</vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
          <vui-breadcrumb>
            <vui-breadcrumb-item>
              <a href="/">Home</a>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>
              <a href="/components" target="_blank">Components</a>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
        </div>
        <div class="example-breadcrumb-link">
          <vui-divider orientation="left">Router Link</vui-divider>
          <vui-breadcrumb>
            <vui-breadcrumb-item>
              <router-link to="/">Home</router-link>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>
              <router-link to="/components">Components</router-link>
            </vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
          </vui-breadcrumb>
        </div>
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
  .example-breadcrumb-link + .example-breadcrumb-link { margin-top:24px; }
  .example-breadcrumb-link .vui-divider { margin-top:0; }
  .example-breadcrumb-link .vui-breadcrumb + .vui-breadcrumb { margin-top:8px; }
</style>