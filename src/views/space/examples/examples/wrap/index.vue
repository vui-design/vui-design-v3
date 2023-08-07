<template>
  <vui-example id="example-space-wrap" v-bind:code="code">
    <template v-slot:title>自动换行</template>
    <template v-slot:description>
      <p>可以通过 <code>wrap</code> 属性控制是否自动换行，默认不换行。</p>
    </template>
    <template v-slot:demo>
      <vui-space wrap v-bind:gutter="[8, 16]">
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
        <vui-button type="primary">Button</vui-button>
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