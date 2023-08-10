const code =
`<template>
  <div class="example-message-update">
    <vui-button v-on:click="showMessage1">Use the update method</vui-button>
    <vui-button v-on:click="showMessage2">Update by id</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const times = ref<number>(1);

      const showMessage1 = () => {
        const message = Message.info("This is a info message");

        setTimeout(() => {
          message.update("This message content is changed");
        }, 1000);
      };
      const showMessage2 = () => {
        Message.info({
          id: 1,
          content: "This is a info message" + times.value++
        });
      };

      return {
        showMessage1,
        showMessage2
      };
    }
  });
</script>

<style>
  .example-message-update .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;