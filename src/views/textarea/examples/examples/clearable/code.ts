const code =
`<template>
  <vui-textarea v-model:value="value" clearable placeholder="Enter something..." />
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