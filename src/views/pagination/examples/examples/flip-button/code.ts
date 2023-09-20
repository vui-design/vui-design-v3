const code =
`<template>
  <vui-pagination
    v-model:page="page"
    v-bind:total="100"
    v-on:changePage="handleChangePage"
    prevPageText="上一页"
    nextPageText="下一页"
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const page = ref<number>(1);
      const handleChangePage = (newPage: number) => {
        console.log(newPage);
      };

      return {
        page,
        handleChangePage
      };
    }
  });
</script>
`;

export default code;