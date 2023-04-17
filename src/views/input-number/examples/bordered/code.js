const code =
`<template>
  <vui-input-number v-model:value="value" v-bind:bordered="false" v-bind:min="1" v-bind:max="100" />
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