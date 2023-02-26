const code = `
<template>
  <vui-avatar v-bind:size="size" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref({
        xs: "small",
        sm: "medium",
        md: "large",
        lg: 64,
        xl: 80,
        xxl: 100
      });

      return {
        size
      };
    }
  });
</script>
`;

export default code.trim();