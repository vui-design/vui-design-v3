<template>
  <vui-example id="example-notification-update" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-notification-update">
        <vui-button v-on:click="showNotification1">Use the update method</vui-button>
        <vui-button v-on:click="showNotification2">Update by id</vui-button>
      </div>
    </template>
    <template v-slot:title>更新通知内容</template>
    <template v-slot:description>
      <p>可以使用当前通知提醒引用下的 <code>update</code> 方法更新标题、内容等，也可以在打开通知提醒时指定唯一 <code>id</code> 标识来实现此操作。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Notification } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
        showNotification1,
        showNotification2
      };
    }
  });
</script>

<style>
  .example-notification-update .vui-button + .vui-button { margin-left:16px; }
</style>