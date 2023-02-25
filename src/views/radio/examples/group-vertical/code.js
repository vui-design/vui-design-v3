const code =
`<template>
  <vui-radio-group
    layout="vertical"
    v-model:value="value"
    v-on:change="handleChange"
  >
    <vui-radio v-bind:value="1">A</vui-radio>
    <vui-radio v-bind:value="2">B</vui-radio>
    <vui-radio v-bind:value="3">C</vui-radio>
    <vui-radio v-bind:value="4">D</vui-radio>
  </vui-radio-group>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref(1);
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