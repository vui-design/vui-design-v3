const code =
`<template>
  <vui-space>
    <vui-radio v-model:checked="checked1" disabled>Radio</vui-radio>
    <vui-radio v-model:checked="checked2" disabled>Radio</vui-radio>
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked1 = ref<boolean>(true);
      const checked2 = ref<boolean>(false);

      return {
        checked1,
        checked2
      };
    }
  });
</script>
`;

export default code;