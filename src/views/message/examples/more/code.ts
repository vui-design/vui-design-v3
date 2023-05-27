const code =
`<template>
  <vui-button type="primary" v-on:click="showMessage">Render Function</vui-button>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showMessage = () => {
        Message.info(() => h("div", null, "I was returned by a function."));
      };

      return {
        showMessage
      };
    }
  });
</script>
`;

export default code;