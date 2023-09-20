const code =
`<template>
  <div class="example-pagination-total">
    <vui-pagination v-model:page="page1" v-bind:total="95" showTotal />
    <vui-pagination v-model:page="page2" v-bind:total="95" v-bind:showTotal="showTotal2" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const page1 = ref<number>(1);
      const page2 = ref<number>(1);
      const showTotal2 = (total: number, range: [number, number]) => {
        return range[0] + "~" + range[1] + " / " + total;
      };

      return {
        page1,
        page2,
        showTotal2
      };
    }
  });
</script>

<style>
  .example-pagination-total .vui-pagination + .vui-pagination { margin-top:24px; }
</style>
`;

export default code;