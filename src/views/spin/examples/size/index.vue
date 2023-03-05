<template>
  <vui-example id="example-spin-size" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-spin-size">
        <vui-spin size="small" />
        <vui-spin />
        <vui-spin size="large" />
      </div>
    </template>
    <template v-slot:title>各种尺寸</template>
    <template v-slot:description>
      <p>建议将小型尺寸用于文本加载，默认尺寸用于卡片容器级加载，大型尺寸用于页面级加载。</p>
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
  .example-spin-size .vui-spin + .vui-spin { margin-left:16px; }
</style>