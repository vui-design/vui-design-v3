const code =
`<template>
  <vui-input-number v-model:value="value" v-bind:step="0.1" v-bind:min="0" v-bind:max="10" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(0);

      return {
        value
      };
    }
  });
</script>
`;

export default code;