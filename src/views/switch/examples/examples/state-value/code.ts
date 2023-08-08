const code =
`<template>
  <vui-switch
    v-model:checked="checked"
    v-bind:checkedValue="1"
    v-bind:uncheckedValue="0"
  />
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref<number>(1);

      watch(checked, (value: number) => {
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