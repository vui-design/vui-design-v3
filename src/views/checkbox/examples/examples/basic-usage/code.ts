const code =
`<template>
  <vui-checkbox v-model:checked="checked">
    Checkbox
  </vui-checkbox>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref<boolean>(false);

      watch(checked, (value: boolean) => {
        console.log(value);
      });

      return {
        checked
      };
    }
  });
</script>
`;

export default code;