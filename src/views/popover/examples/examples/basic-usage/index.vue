<template>
  <vui-example id="example-popover-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法，浮层的大小由内容区域决定。</p>
    </template>
    <template v-slot:demo>
      <vui-popover title="Title" content="This is a popover.">
        <vui-button type="primary">Hover me</vui-button>
      </vui-popover>
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