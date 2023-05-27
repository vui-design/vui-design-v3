const code =
`<template>
  <vui-button type="primary" v-on:click="showDurationMessage">Customized display duration</vui-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showMessage = () => {
        Message.info("I will disappear in 10 seconds...", 10000);
      };

      return {
        showMessage
      };
    }
  });
</script>
`;

export default code;