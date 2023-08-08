const code =
`<template>
  <vui-rate v-model:value="value" allowHalf />
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(2.5);

      watch(value, value => {
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