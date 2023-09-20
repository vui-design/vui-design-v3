<template>
  <vui-example id="example-pagination-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
    </template>
    <template v-slot:demo>
      <vui-pagination v-model:page="page" v-bind:total="50" v-on:changePage="handleChangePage" />
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