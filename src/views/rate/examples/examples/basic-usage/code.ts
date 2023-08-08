const code =
`<template>
  <vui-rate v-model:value="value" />
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(2);

      watch(value, (value: number) => {
        console.log(value);
      });

      return {
        value
      };
    }
  });
</script>
`;

export default code;