<template>
  <vui-example id="example-link-disabled" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-link-disabled">
        <vui-link href="https://github.com/vui-design/vui-design" target="_blank" disabled>Default</vui-link>
        <vui-link type="primary" disabled>Primary</vui-link>
        <vui-link type="info" disabled>Info</vui-link>
        <vui-link type="warning" disabled>Warning</vui-link>
        <vui-link type="success" disabled>Success</vui-link>
        <vui-link type="danger" disabled>Danger</vui-link>
      </div>
    </template>
    <template v-slot:title>禁用</template>
    <template v-slot:description>
      <p>禁用的文字链接。</p>
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
  .example-link-disabled .vui-link + .vui-link { margin-left:16px; }
</style>