<template>
  <vui-example id="example-pagination-align" v-bind:code="code">
    <template v-slot:title>水平对齐方式</template>
    <template v-slot:description>
      <p>通过 <code>align</code> 属性设置分页的水平对齐方式。</p>
    </template>
    <template v-slot:demo>
      <div class="example-pagination-simple">
        <vui-pagination v-bind:total="500" />
        <vui-pagination v-bind:total="500" align="center" />
        <vui-pagination v-bind:total="500" align="right" />
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
  .example-pagination-align .vui-pagination + .vui-pagination { margin-top:24px; }
</style>