const code =
`<template>
  <vui-radio v-model:checked="checked">
    Radio
  </vui-radio>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref(false);

      watch(checked, value => {
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