<template>
  <vui-example id="example-card-grid" v-bind:code="code">
    <template v-slot:title>内容区隔</template>
    <template v-slot:description>
      <p>常见的卡片内容区隔模式。</p>
    </template>
    <template v-slot:demo>
      <vui-card title="Card title">
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
        <vui-card-grid style="width: 25%;">Content...</vui-card-grid>
      </vui-card>
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