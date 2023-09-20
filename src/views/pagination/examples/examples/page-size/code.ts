const code =
`<template>
  <vui-pagination
    v-model:page="page"
    v-model:pageSize="pageSize"
    v-bind:total="500"
    v-on:changePage="handleChangePage"
    v-on:changePageSize="handleChangePageSize"
    showPageSizer
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
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
        page,
        pageSize,
        handleChangePage,
        handleChangePageSize
      };
    }
  });
</script>
`;

export default code;