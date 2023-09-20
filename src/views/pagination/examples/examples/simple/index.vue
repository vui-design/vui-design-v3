<template>
  <vui-example id="example-pagination-simple" v-bind:code="code">
    <template v-slot:title>简洁模式</template>
    <template v-slot:description>
      <p>设置 <code>simple</code> 属性即可使用简洁版本的分页，通过输入页码回车切换，或使用键盘的上下键来切换。</p>
    </template>
    <template v-slot:demo>
      <div class="example-pagination-simple">
        <vui-pagination simple v-bind:total="50" />
        <vui-pagination simple v-bind:total="50" showTotal />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-pagination-simple .vui-pagination + .vui-pagination { margin-top:24px; }
</style>