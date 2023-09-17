const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string>();

      return {
        value
      };
    }
  });
</script>
`;

export default code;