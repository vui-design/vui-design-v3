<template>
  <vui-example id="example-select-clearable" v-bind:code="code">
    <template v-slot:title>可清空</template>
    <template v-slot:description>
      <p>含有清空图标的选择器，点击图标清空已选选项。</p>
    </template>
    <template v-slot:demo>
      <div class="example-select-clearable">
        <vui-select v-model:value="value1" searchable clearable style="width: 200px;" placeholder="Please select">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select v-model:value="value2" multiple searchable clearable placeholder="Please select">
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
  .example-select-clearable .vui-select + .vui-select { margin-top:24px; }
</style>