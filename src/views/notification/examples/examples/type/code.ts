const code =
`<template>
  <div class="example-notification-type">
    <section>
      <vui-divider orientation="left">With description</vui-divider>
      <vui-button type="info" v-on:click="showInfoNotification(true)">Info</vui-button>
      <vui-button type="warning" v-on:click="showWarningNotification(true)">Warning</vui-button>
      <vui-button type="success" v-on:click="showSuccessNotification(true)">Success</vui-button>
      <vui-button type="danger" v-on:click="showErrorNotification(true)">Error</vui-button>
    </section>
    <section>
      <vui-divider orientation="left">No description</vui-divider>
      <vui-button type="info" ghost v-on:click="showInfoNotification()">Info</vui-button>
      <vui-button type="warning" ghost v-on:click="showWarningNotification()">Warning</vui-button>
      <vui-button type="success" ghost v-on:click="showSuccessNotification()">Success</vui-button>
      <vui-button type="danger" ghost v-on:click="showErrorNotification()">Error</vui-button>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Notification } from "vui-design";

  export default defineComponent({
    setup() {
      const showInfoNotification = (flag?: boolean) => {
        Notification.info({
          title: "This is notification title",
          description: flag ? "This is the description of the notification. This is the description of the notification. This is the description of the notification." : ""
        });
      };
      const showWarningNotification = (flag?: boolean) => {
        Notification.warning({
          title: "This is notification title",
          description: flag ? "This is the description of the notification. This is the description of the notification. This is the description of the notification." : ""
        });
      };
      const showSuccessNotification = (flag?: boolean) => {
        Notification.success({
          title: "This is notification title",
          description: flag ? "This is the description of the notification. This is the description of the notification. This is the description of the notification." : ""
        });
      };
      const showErrorNotification = (flag?: boolean) => {
        Notification.error({
          title: "This is notification title",
          description: flag ? "This is the description of the notification. This is the description of the notification. This is the description of the notification." : ""
        });
      };

      return {
        showInfoNotification,
        showWarningNotification,
        showSuccessNotification,
        showErrorNotification
      };
    }
  });
</script>

<style>
  .example-notification-type section + section { margin-top:32px; }
  .example-notification-type section .vui-divider { margin-top:0; }
  .example-notification-type section .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;