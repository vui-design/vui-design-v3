<template>
  <vui-example id="example-button-disabled" v-bind:code="code">
    <template v-slot:title>禁用状态</template>
    <template v-slot:description>
      <p>添加 <code>disabled</code> 属性即可让按钮处于禁用状态。</p>
    </template>
    <template v-slot:demo>
      <div class="example-button-disabled">
        <vui-space block>
          <vui-button type="primary">Primary</vui-button>
          <vui-button type="primary" disabled>Primary(disabled)</vui-button>
        </vui-space>
        <vui-space block>
          <vui-button>Default</vui-button>
          <vui-button disabled>Default(disabled)</vui-button>
        </vui-space>
        <vui-space block>
          <vui-button type="dashed">Dashed</vui-button>
          <vui-button type="dashed" disabled>Dashed(disabled)</vui-button>
        </vui-space>
        <vui-space block>
          <vui-button type="text">Text</vui-button>
          <vui-button type="text" disabled>Text(disabled)</vui-button>
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
  .example-button-disabled .vui-space + .vui-space { margin-top:16px; }
</style>