<template>
  <vui-example id="example-pagination-more" v-bind:code="code">
    <template v-slot:title>更多分页</template>
    <template v-slot:description>
      <p>更多分页，当页数过多时会自动折叠。</p>
    </template>
    <template v-slot:demo>
      <vui-pagination v-model:page="page" v-bind:total="500" v-on:changePage="handleChangePage" />
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
      const page = ref<number>(6);
      const handleChangePage = (newPage: number) => {
        console.log(newPage);
      };

      return {
        code,
        page,
        handleChangePage
      };
    }
  });
</script>