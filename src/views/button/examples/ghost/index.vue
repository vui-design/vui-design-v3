<template>
  <vui-example id="example-button-ghost" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-button-ghost">
        <vui-button type="primary" ghost>Primary</vui-button>
        <vui-button type="info" ghost>Info</vui-button>
        <vui-button type="warning" ghost>Warning</vui-button>
        <vui-button type="success" ghost>Success</vui-button>
        <vui-button type="danger" ghost>Danger</vui-button>
        <vui-button ghost>Default</vui-button>
        <vui-button type="dashed" ghost>Dashed</vui-button>
        <vui-button type="text" ghost>Text</vui-button>
      </div>
    </template>
    <template v-slot:title>幽灵按钮</template>
    <template v-slot:description>
      <p>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</p>
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
  .example-button-ghost { background-color:#bec8c8; padding:8px 16px; }
  .example-button-ghost .vui-button { margin:8px 16px 8px 0; }
</style>