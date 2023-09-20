<template>
  <vui-example id="example-pagination-page-size" v-bind:code="code">
    <template v-slot:title>每页数量</template>
    <template v-slot:description>
      <p>可以切换每页显示的数量。</p>
    </template>
    <template v-slot:demo>
      <vui-pagination
        v-model:page="page"
        v-model:pageSize="pageSize"
        v-bind:total="500"
        v-on:changePage="handleChangePage"
        v-on:changePageSize="handleChangePageSize"
        showPageSizer
      />
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
      const page = ref<number>(1);
      const pageSize = ref<number>(10);
      const handleChangePage = (newPage: number) => {
        console.log("page: " + newPage);
      };
      const handleChangePageSize = (newPageSize: number) => {
        console.log("pageSize: " + newPageSize);
      };

      return {
        code,
        page,
        pageSize,
        handleChangePage,
        handleChangePageSize
      };
    }
  });
</script>