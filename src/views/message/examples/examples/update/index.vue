<template>
  <vui-example id="example-message-update" v-bind:code="code">
    <template v-slot:title>更新消息内容</template>
    <template v-slot:description>
      <p>可以使用当前消息提示引用的 <code>update</code> 方法更新内容等，也可以在打开消息提示时指定唯一 <code>id</code> 标识来实现此操作。</p>
    </template>
    <template v-slot:demo>
      <div class="example-message-update">
        <vui-button v-on:click="showMessage1">Use the update method</vui-button>
        <vui-button v-on:click="showMessage2">Update by id</vui-button>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const times = ref<number>(1);

      const showMessage1 = () => {
        const message = Message.info("This is a info message");

        setTimeout(() => {
          message.update("This message content is changed");
        }, 1000);
      };
      const showMessage2 = () => {
        Message.info({
          id: 1,
          content: "This is a info message" + times.value++
        });
      };

      return {
        code,
        showMessage1,
        showMessage2
      };
    }
  });
</script>

<style>
  .example-message-update .vui-button + .vui-button { margin-left:16px; }
</style>