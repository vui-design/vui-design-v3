const code =
`<template>
  <div class="example-pagination-hide-on-single-page">
    <div class="example-pagination-hide-on-single-page-title">
      <label>Hide On Single Page:</label>
      <vui-switch type="line" v-model:checked="hideOnSinglePage" />
    </div>
    <vui-pagination v-bind:total="8" v-bind:hideOnSinglePage="hideOnSinglePage" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const hideOnSinglePage = ref<boolean>(false);

      return {
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
`;

export default code;