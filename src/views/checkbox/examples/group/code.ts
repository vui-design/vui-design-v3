const code =
`<template>
  <vui-checkbox-group
    v-model:value="value"
    v-on:change="handleChange"
  >
    <vui-checkbox v-bind:value="1">A</vui-checkbox>
    <vui-checkbox v-bind:value="2">B</vui-checkbox>
    <vui-checkbox v-bind:value="3">C</vui-checkbox>
    <vui-checkbox v-bind:value="4">D</vui-checkbox>
  </vui-checkbox-group>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref([1]);
      const handleChange = newValue => {
        console.log(newValue);
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