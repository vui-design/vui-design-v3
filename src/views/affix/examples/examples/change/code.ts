const code =
`<template>
  <vui-affix v-bind:offsetTop="top" v-on:change="handleChange">
    <vui-button>100px to affix top</vui-button>
  </vui-affix>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const top = ref<number>(100);
      const handleChange = (affixed: boolean) => console.log(affixed);

      return {
        top,
        handleChange
      };
    }
  });
</script>
`;

export default code;