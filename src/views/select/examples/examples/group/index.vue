<template>
  <vui-example id="example-select-option-group" v-bind:code="code">
    <template v-slot:title>分组</template>
    <template v-slot:description>
      <p>使用 <code>OptionGroup</code> 进行选项分组。</p>
    </template>
    <template v-slot:demo>
      <vui-select v-model:value="value" style="width: 200px;" placeholder="Please select">
        <vui-option-group label="Hot Cities">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
        </vui-option-group>
        <vui-option-group label="Other Cities">
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-option-group>
      </vui-select>
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
      const value = ref<string>();

      return {
        code,
        value
      };
    }
  });
</script>