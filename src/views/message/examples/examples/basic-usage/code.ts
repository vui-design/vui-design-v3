const code =
`<template>
  <vui-button type="primary" v-on:click="showMessage">Normal message</vui-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showMessage = () => {
        Message.info("This is a normal message");
      };

      return {
        showMessage
      };
    }
  });
</script>
`;

export default code;