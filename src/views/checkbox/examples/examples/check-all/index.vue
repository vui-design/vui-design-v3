<template>
  <vui-example id="example-checkbox-check-all" v-bind:code="code">
    <template v-slot:title>全选</template>
    <template v-slot:description>
      <p>在实现全选效果时，你可能会用到 <code>indeterminate</code> 属性。</p>
    </template>
    <template v-slot:demo>
      <div class="example-checkbox-check-all">
        <vui-checkbox
          v-bind:indeterminate="indeterminate"
          v-bind:checked="checkedAll"
          v-on:change="handleCheckAll"
        >Check All</vui-checkbox>
        <br />
        <br />
        <vui-checkbox-group v-model:value="checkedList" v-bind:options="options" />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const options: string[] = ["A", "B", "C", "D"];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const indeterminate = ref<boolean>(true);
      const checkedAll = ref<boolean>(false);
      const checkedList = ref<string[]>(["A"]);

      watch(checkedList, (newValue: string[]) => {
        indeterminate.value = !!newValue.length && newValue.length < options.length;
        checkedAll.value = newValue.length === options.length;
      });

      const handleCheckAll = (checked: boolean) => {
        checkedList.value = checked ? options : [];
      };

      return {
        code,
        indeterminate,
        checkedAll,
        checkedList,
        options,
        handleCheckAll
      };
    }
  });
</script>

<style>
  .example-checkbox-check-all { line-height:1; }
</style>