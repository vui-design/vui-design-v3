const code =
`<template>
  <vui-button type="primary" v-on:click="showNotification">Customized display duration</vui-button>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Notification } from "vui-design";

  export default defineComponent({
    setup() {
      const showNotification = () => {
        Notification.info({
          title: "I will disappear in 10 seconds...",
          description: "This is the description of the notification. This is the description of the notification. This is the description of the notification.",
          duration: 10000
        });
      };

      return {
        showNotification
      };
    }
  });
</script>
`;

export default code;