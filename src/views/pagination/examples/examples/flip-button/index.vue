<template>
  <vui-example id="example-pagination-flip-button" v-bind:code="code">
    <template v-slot:title>翻页按钮文本</template>
    <template v-slot:description>
      <p>自定义翻页按钮的文本。</p>
    </template>
    <template v-slot:demo>
      <vui-pagination
        v-model:page="page"
        v-bind:total="100"
        v-on:changePage="handleChangePage"
        prevPageText="上一页"
        nextPageText="下一页"
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