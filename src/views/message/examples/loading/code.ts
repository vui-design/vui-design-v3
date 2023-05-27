const code =
`<template>
  <vui-button type="primary" v-on:click="showLoadingMessage">Loading</vui-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showLoadingMessage = () => {
        const loading = Message.loading("Action in progress...", 0);

        setTimeout(() => {
          loading.close();
          Message.success("Action succeeded");
        }, 3000);
      };

      return {
        showLoadingMessage
      };
    }
  });
</script>
`;

export default code;