<template>
  <vui-example id="example-select-disabled" v-bind:code="code">
    <template v-slot:title>禁用</template>
    <template v-slot:description>
      <p>选项禁用、选项组禁用以及选择器禁用的综合示例。</p>
    </template>
    <template v-slot:demo>
      <div class="example-select-disabled">
        <vui-select v-model:value="value1" style="width: 200px;" placeholder="Please select">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris" disabled>Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select v-model:value="value2" style="width: 200px;" placeholder="Please select">
          <vui-option-group disabled label="Hot Cities">
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
        <vui-select v-model:value="value3" multiple searchable placeholder="Please select">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney" disabled>Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select v-model:value="value4" disabled style="width: 200px;" placeholder="Please select">
          <vui-option value="new york">New York</vui-option>
          <vui-option value="london">London</vui-option>
          <vui-option value="sydney">Sydney</vui-option>
          <vui-option value="ottawa">Ottawa</vui-option>
          <vui-option value="paris">Paris</vui-option>
          <vui-option value="canberra">Canberra</vui-option>
        </vui-select>
        <vui-select v-model:value="value5" multiple disabled placeholder="Please select">
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
      const value2 = ref<string>();
      const value3 = ref<string[]>(["new york", "sydney"]);
      const value4 = ref<string[]>(["new york"]);
      const value5 = ref<string[]>(["new york", "sydney"]);

      return {
        code,
        value1,
        value2,
        value3,
        value4,
        value5
      };
    }
  });
</script>

<style>
  .example-select-disabled .vui-select { display:block; }
  .example-select-disabled .vui-select + .vui-select { margin-top:24px; }
</style>