<template>
  <vui-example id="example-pagination-hide-on-single-page" v-bind:code="code">
    <template v-slot:title>隐藏</template>
    <template v-slot:description>
      <p>当只有一页时，通过设置 <code>hideOnSinglePage</code> 属性来隐藏分页。</p>
    </template>
    <template v-slot:demo>
      <div class="example-pagination-hide-on-single-page">
        <div class="example-pagination-hide-on-single-page-title">
          <label>Hide On Single Page:</label>
          <vui-switch type="line" v-model:checked="hideOnSinglePage" />
        </div>
        <vui-pagination v-bind:total="8" v-bind:hideOnSinglePage="hideOnSinglePage" />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const hideOnSinglePage = ref<boolean>(false);

      return {
        code,
        hideOnSinglePage
      };
    }
  });
</script>

<style>
  .example-pagination-hide-on-single-page .example-pagination-hide-on-single-page-title { display:flex; justify-content:flex-start; align-items:center; }
  .example-pagination-hide-on-single-page .example-pagination-hide-on-single-page-title label { margin-right:8px; }
  .example-pagination-hide-on-single-page .vui-pagination { margin-top:24px; }
</style>