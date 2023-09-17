const code =
`<template>
  <vui-select
    v-model:value="value"
    v-on:change="handleChange"
    multiple
    placeholder="Please select"
  >
    <vui-option value="new york">New York</vui-option>
    <vui-option value="london">London</vui-option>
    <vui-option value="sydney">Sydney</vui-option>
    <vui-option value="ottawa">Ottawa</vui-option>
    <vui-option value="paris">Paris</vui-option>
    <vui-option value="canberra">Canberra</vui-option>
  </vui-select>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string[]>(["london", "ottawa"]);
      const handleChange = (value: string[]) => {
        console.log(value);
      };

      return {
        value,
        handleChange
      };
    }
  });
</script>
`;

export default code;