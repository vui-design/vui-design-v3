const code =
`<template>
  <vui-input-password v-model:value="value" placeholder="Please enter password..." />
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