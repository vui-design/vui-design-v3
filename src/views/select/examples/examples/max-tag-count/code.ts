const code =
`<template>
  <div class="example-select-max-tag-count">
    <vui-select
      v-model:value="value1"
      v-bind:maxTagCount="2"
      multiple
      placeholder="Please select"
      v-on:change="handleChange1"
    >
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
    <vui-select
      v-model:value="value2"
      v-bind:maxTagCount="2"
      v-bind:maxTagPlaceholder="maxTagPlaceholder2"
      multiple
      placeholder="Please select"
      v-on:change="handleChange2"
    >
      <vui-option value="new york">New York</vui-option>
      <vui-option value="london">London</vui-option>
      <vui-option value="sydney">Sydney</vui-option>
      <vui-option value="ottawa">Ottawa</vui-option>
      <vui-option value="paris">Paris</vui-option>
      <vui-option value="canberra">Canberra</vui-option>
    </vui-select>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value1 = ref<string[]>([]);
      const handleChange1 = (value: string) => {
        console.log(value);
      };

      const value2 = ref<string[]>([]);
      const maxTagPlaceholder2 = (count: number) => "More " + count;
      const handleChange2 = (value: string) => {
        console.log(value);
      };

      return {
        value1,
        handleChange1,
        value2,
        maxTagPlaceholder2,
        handleChange2
      };
    }
  });
</script>

<style>
  .example-select-max-tag-count .vui-select + .vui-select { margin-top:24px; }
</style>
`;

export default code;