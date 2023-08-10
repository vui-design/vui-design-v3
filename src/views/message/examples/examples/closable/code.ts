const code =
`<template>
  <vui-button type="primary" v-on:click="showClosableMessage">Closable</vui-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showMessage = () => {
        Message.info({
          content: "This is a message that can be closed manually",
          closable: true,
          duration: 10000
        });
      };

      return {
        showMessage
      };
    }
  });
</script>
`;

export default code;