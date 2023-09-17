const code =
`<template>
  <vui-select v-model:value="value" multiple placeholder="Please select">
    <template v-for="option in options">
      <vui-option
        v-if="value.indexOf(option) === -1"
        v-bind:key="option"
        v-bind:value="option"
        v-on:change="handleChange"
      >
        {{option}}
      </vui-option>
    </template>
  </vui-select>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string[]>([]);
      const options = ref<string[]>(["New York", "London", "Sydney", "Ottawa", "Paris", "Canberra"]);
      const handleChange = (value: string[]) => {
        console.log(value);
      };

      return {
        value,
        options,
        handleChange
      };
    }
  });
</script>
`;

export default code;