const code =
`<template>
  <div class="example-notification-update">
    <vui-button v-on:click="showNotification1">Use the update method</vui-button>
    <vui-button v-on:click="showNotification2">Update by id</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Notification } from "vui-design";

  export default defineComponent({
    setup() {
      const times = ref<number>(1);

      const showNotification1 = () => {
        const notification = Notification.info({
          title: "This is notification title",
          description: "This is the description of the notification. This is the description of the notification. This is the description of the notification."
        });

        setTimeout(() => {
          notification.update({
            title: "This notification title is changed",
            description: "This is the description of the notification. This is the description of the notification."
          });
        }, 1000);
      };
      const showNotification2 = () => {
        Notification.info({
          id: 1,
          title: "This is notification title" + times.value++,
          description: "This is the description of the notification. This is the description of the notification."
        });
      };

      return {
        showNotification1,
        showNotification2
      };
    }
  });
</script>

<style>
  .example-notification-update .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;