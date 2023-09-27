<template>
  <vui-example id="example-button-type" v-bind:code="code">
    <template v-slot:title>按钮类型</template>
    <template v-slot:description>
      <p>按钮包含八种类型。一般情况下，我们将 <code>primary</code> 类型用于主按钮，而次按钮使用 <code>default</code> 类型，建议主按钮在同一个操作区域最多出现一次。</p>
    </template>
    <template v-slot:demo>
      <vui-space block wrap v-bind:gutter="16">
        <vui-button type="primary">Primary</vui-button>
        <vui-button type="info">Info</vui-button>
        <vui-button type="warning">Warning</vui-button>
        <vui-button type="success">Success</vui-button>
        <vui-button type="danger">Danger</vui-button>
        <vui-button>Default</vui-button>
        <vui-button type="dashed">Dashed</vui-button>
        <vui-button type="text">Text</vui-button>
      </vui-space>
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