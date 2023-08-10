const code =
`<template>
  <div class="example-notification-basic-usage">
    <vui-button type="primary" v-on:click="showNotification(true)">With description</vui-button>
    <vui-button v-on:click="showNotification()">No description</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Notification } from "vui-design";

  export default defineComponent({
    setup() {
      const showNotification = (flag?: boolean) => {
        Notification.info({
          title: "This is notification title",
          description: flag ? "This is the description of the notification. This is the description of the notification. This is the description of the notification." : ""
        });
      };

      return {
        showNotification
      };
    }
  });
</script>

<style>
  .example-notification-basic-usage .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;