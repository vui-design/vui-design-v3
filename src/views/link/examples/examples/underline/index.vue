<template>
  <vui-example id="example-link-underline" v-bind:code="code">
    <template v-slot:title>下划线</template>
    <template v-slot:description>
      <p>鼠标移入后显示下划线。</p>
    </template>
    <template v-slot:demo>
      <div class="example-link-underline">
        <vui-link underline>Default</vui-link>
        <vui-link type="primary" underline>Primary</vui-link>
        <vui-link type="info" underline>Info</vui-link>
        <vui-link type="warning" underline>Warning</vui-link>
        <vui-link type="success" underline>Success</vui-link>
        <vui-link type="danger" underline>Danger</vui-link>
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
  .example-link-underline .vui-link + .vui-link { margin-left:16px; }
</style>