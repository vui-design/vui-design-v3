const code =
`<template>
  <vui-button type="primary" v-on:click="showNotification">Render Function</vui-button>
</template>

<script lang="tsx">
  import { defineComponent, h } from "vue";
  import { Notification } from "vui-design";

  export default defineComponent({
    setup() {
      const showNotification = () => {
        Notification.info({
          title: () => h("div", null, "This is notification title"),
          description: () => (
            <div>This is the description of the notification. <span style="color: #ff4d4f;">I was returned by a function.</span></div>
          )
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