const code =
`<template>
  <vui-textarea v-model:value="value" v-bind:bordered="false" placeholder="Borderless" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string>("");

      return {
        value
      };
    }
  });
</script>
`;

export default code;