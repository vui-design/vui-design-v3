<template>
  <vui-example id="example-link-type" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-link-type">
        <vui-link>Default</vui-link>
        <vui-link type="primary">Primary</vui-link>
        <vui-link type="info">Info</vui-link>
        <vui-link type="warning">Warning</vui-link>
        <vui-link type="success">Success</vui-link>
        <vui-link type="danger">Danger</vui-link>
      </div>
    </template>
    <template v-slot:title>链接类型</template>
    <template v-slot:description>
      <p>文字链接包含六种类型。一般情况下，我们将 <code>primary</code> 类型用于主链接，而次链接使用 <code>default</code> 类型。</p>
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
  .example-link-type .vui-link + .vui-link { margin-left:16px; }
</style>