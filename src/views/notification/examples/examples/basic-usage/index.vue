<template>
  <vui-example id="example-notification-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法，<code>5</code> 秒后自动关闭。</p>
    </template>
    <template v-slot:demo>
      <div class="example-notification-basic-usage">
        <vui-button type="primary" v-on:click="showNotification(true)">With description</vui-button>
        <vui-button v-on:click="showNotification()">No description</vui-button>
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
      const showNotification = (flag?: boolean) => {
        Notification.info({
          title: "This is notification title",
          description: flag ? "This is the description of the notification. This is the description of the notification. This is the description of the notification." : ""
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
  .example-notification-basic-usage .vui-button + .vui-button { margin-left:16px; }
</style>