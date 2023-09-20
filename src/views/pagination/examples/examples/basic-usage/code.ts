const code =
`<template>
  <vui-pagination v-model:page="page" v-bind:total="50" v-on:changePage="handleChangePage" />
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