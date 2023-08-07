<template>
  <vui-example id="example-space-vertical" v-bind:code="code">
    <template v-slot:title>垂直排列</template>
    <template v-slot:description>
      <p>相邻组件垂直排列。可以添加 <code>block</code> 属性，以使 <code>Space</code> 独占一行。</p>
    </template>
    <template v-slot:demo>
      <vui-space block direction="vertical">
        <vui-card style="width: 320px;" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
        <vui-card title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
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