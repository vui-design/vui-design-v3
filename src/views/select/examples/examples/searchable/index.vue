<template>
  <vui-example id="example-select-searchable" v-bind:code="code">
    <template v-slot:title>带搜索框</template>
    <template v-slot:description>
      <p>展开后可对选项进行搜索。</p>
    </template>
    <template v-slot:demo>
      <div class="example-select-searchable">
        <vui-select v-model:value="value1" searchable style="width: 200px;" placeholder="Please select">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select v-model:value="value2" multiple searchable placeholder="Please select">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
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
      const value1 = ref<string>();
      const value2 = ref<string[]>([]);

      return {
        code,
        value1,
        value2
      };
    }
  });
</script>

<style>
  .example-select-searchable .vui-select + .vui-select { margin-top:24px; }
</style>