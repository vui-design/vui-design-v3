const code =
`<template>
  <vui-switch
    v-model:checked="checked"
    checkedColor="#52c41a"
    uncheckedColor="#ff4d4f"
  />
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