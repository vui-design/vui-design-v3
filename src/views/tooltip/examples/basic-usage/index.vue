<template>
  <vui-example id="example-tooltip-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-tooltip content="This is a tooltip">
        <span>Tooltip will show on mouse enter.</span>
      </vui-tooltip>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "src/components/example";
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