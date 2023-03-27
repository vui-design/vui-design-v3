<template>
  <vui-example id="example-tag-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-tag-basic-usage">
        <vui-tag>Tag 1</vui-tag>
        <vui-tag>Tag 2</vui-tag>
        <vui-tag>Tag 3</vui-tag>
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的标签展示。</p>
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
  .example-tag-basic-usage { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-basic-usage .vui-tag + .vui-tag { margin-left:8px; }
</style>