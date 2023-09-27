<template>
  <vui-example id="example-notification-type" v-bind:code="code">
    <template v-slot:title>提醒类型</template>
    <template v-slot:description>
      <p>不同的提醒类型：<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code>。</p>
    </template>
    <template v-slot:demo>
      <div class="example-notification-type">
        <section>
          <vui-divider orientation="left">With description</vui-divider>
          <vui-button type="info" ghost v-on:click="showInfoNotification(true)">Info</vui-button>
          <vui-button type="warning" ghost v-on:click="showWarningNotification(true)">Warning</vui-button>
          <vui-button type="success" ghost v-on:click="showSuccessNotification(true)">Success</vui-button>
          <vui-button type="danger" ghost v-on:click="showErrorNotification(true)">Error</vui-button>
        </section>
        <section>
          <vui-divider orientation="left">No description</vui-divider>
          <vui-button type="info" v-on:click="showInfoNotification()">Info</vui-button>
          <vui-button type="warning" v-on:click="showWarningNotification()">Warning</vui-button>
          <vui-button type="success" v-on:click="showSuccessNotification()">Success</vui-button>
          <vui-button type="danger" v-on:click="showErrorNotification()">Error</vui-button>
        </section>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Notification } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
        showInfoNotification,
        showWarningNotification,
        showSuccessNotification,
        showErrorNotification
      };
    }
  });
</script>

<style>
  .example-notification-type section + section { margin-top:24px; }
  .example-notification-type section .vui-divider { margin-top:0; }
  .example-notification-type section .vui-button + .vui-button { margin-left:16px; }
</style>