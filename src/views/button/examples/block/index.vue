<template>
  <vui-example id="example-button-block" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-button-block">
        <vui-button type="primary" block>Primary</vui-button>
        <vui-button block>Default</vui-button>
        <vui-button type="dashed" block>Dashed</vui-button>
        <vui-button type="text" block>Text</vui-button>
      </div>
    </template>
    <template v-slot:title>Block 按钮</template>
    <template v-slot:description>
      <p>开启 <code>block</code> 属性将使按钮撑满其父元素宽度。</p>
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
  .example-button-block .vui-button + .vui-button { margin-top:16px; }
</style>