<template>
  <vui-example id="example-notification-placement" v-bind:code="code">
    <template v-slot:title>弹出位置</template>
    <template v-slot:description>
      <p>可以设置通知提醒从左上角、右上角、左下角或右下角弹出，默认从右上角弹出。</p>
    </template>
    <template v-slot:demo>
      <div class="example-notification-placement">
        <vui-button type="primary" v-on:click="showNotification('topLeft')">Top Left</vui-button>
        <vui-button type="primary" v-on:click="showNotification('topRight')">Top Right</vui-button>
        <vui-button type="primary" v-on:click="showNotification('bottomLeft')">Bottom Left</vui-button>
        <vui-button type="primary" v-on:click="showNotification('bottomRight')">Bottom Right</vui-button>
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
      const showNotification = (placement: string) => {
        Notification.info({
          title: "This is notification title",
          description: "This is the description of the notification. This is the description of the notification. This is the description of the notification.",
          placement
        });
      };

      return {
        code,
        showNotification
      };
    }
  });
</script>

<style>
  .example-notification-placement .vui-button + .vui-button { margin-left:16px; }
</style>