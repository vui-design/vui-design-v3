const code =
`<template>
  <vui-input v-model:value="value" v-on:input="handleInput" placeholder="Basic usage" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string>("");

      return {
        value
      };
    }
  });
</script>
`;

export default code;