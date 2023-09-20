<template>
  <vui-example id="example-pagination-total" v-bind:code="code">
    <template v-slot:title>总数</template>
    <template v-slot:description>
      <p>通过设置 <code>showTotal</code> 展示总共有多少数据。 </p>
    </template>
    <template v-slot:demo>
      <div class="example-pagination-total">
        <vui-pagination v-model:page="page1" v-bind:total="95" showTotal />
        <vui-pagination v-model:page="page2" v-bind:total="95" v-bind:showTotal="showTotal2" />
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
      const page1 = ref<number>(1);
      const page2 = ref<number>(1);
      const showTotal2 = (total: number, range: [number, number]) => {
        return range[0] + "~" + range[1] + " / " + total;
      };

      return {
        code,
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