const code =
`<template>
  <vui-checkbox
    v-model:checked="value"
    v-bind:checkedValue="1"
    v-bind:uncheckedValue="0"
  >
    Checkbox
  </vui-checkbox>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(0);

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