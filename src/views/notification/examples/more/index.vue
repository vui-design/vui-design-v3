<template>
  <vui-example id="example-notification-more" v-bind:code="code">
    <template v-slot:demo>
      <vui-button type="primary" v-on:click="showNotification">Render Function</vui-button>
    </template>
    <template v-slot:title>更多内容</template>
    <template v-slot:description>
      <p>可以将选项 <code>title</code>、<code>description</code> 设置为一个函数，您所需要做的就是在函数内部返回提示内容即可。</p>
    </template>
  </vui-example>
</template>

<script lang="tsx">
  import { defineComponent, h } from "vue";
  import { Notification } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
        showNotification
      };
    }
  });
</script>