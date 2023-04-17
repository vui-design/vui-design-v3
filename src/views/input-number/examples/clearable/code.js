const code =
`<template>
  <vui-input-number v-model:value="value" clearable />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(1);

      return {
        value
      };
    }
  });
</script>
`;

export default code;