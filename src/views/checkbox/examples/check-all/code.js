const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  const options = ["A", "B", "C", "D"];

  export default defineComponent({
    setup() {
      const indeterminate = ref(true);
      const checkedAll = ref(false);
      const checkedList = ref(["A"]);

      watch(checkedList, newValue => {
        indeterminate.value = !!newValue.length && newValue.length < options.length;
        checkedAll.value = newValue.length === options.length;
      });

      const handleCheckAll = checked => {
        checkedList.value = checked ? options : [];
      };

      return {
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
`;

export default code;