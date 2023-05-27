const code =
`<template>
  <div class="example-notification-placement">
    <vui-button type="primary" v-on:click="showNotification('topLeft')">Top Left</vui-button>
    <vui-button type="primary" v-on:click="showNotification('topRight')">Top Right</vui-button>
    <vui-button type="primary" v-on:click="showNotification('bottomLeft')">Bottom Left</vui-button>
    <vui-button type="primary" v-on:click="showNotification('bottomRight')">Bottom Right</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Notification } from "vui-design";

  export default defineComponent({
    setup() {
      const showNotification = placement => {
        Notification.info({
          title: "This is notification title",
          description: "This is the description of the notification. This is the description of the notification. This is the description of the notification.",
          placement
        });
      };

      return {
        showNotification
      };
    }
  });
</script>

<style>
  .example-notification-placement .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;