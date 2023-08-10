const code =
`<template>
  <vui-button type="primary" v-on:click="showModal">Close automatically after 5s</vui-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Modal } from "vui-design";

  export default defineComponent({
    setup() {
      const showModal = () => {
        let seconds = 5;
        let modal = Modal.success({
          title: "This is a success message",
          description: "This modal will be closed after " + seconds + " second!"
        });
        let interval = setInterval(() => {
          seconds -= 1;
          modal.update({
            description: "This modal will be closed after " + seconds + " second!"
          });
        }, 1000);

        setTimeout(() => {
          clearInterval(interval);
          interval = null;

          modal.close();
        }, seconds * 1000);
      };

      return {
        showModal
      };
    }
  });
</script>
`;

export default code;