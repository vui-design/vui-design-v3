<template>
  <vui-example id="example-modal-promise" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-modal-promise">
        <vui-button type="primary" v-on:click="showModal">Open Modal with async logic</vui-button>
        <vui-modal
          title="Modal Title"
          v-model:visible="visible"
          v-on:cancel="handleCancel"
          v-on:ok="handleOk"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
        </vui-modal>
      </div>
    </template>
    <template v-slot:title>基于 Promise 的异步关闭</template>
    <template v-slot:description>
      <p>点击确定后异步关闭 <code>Modal</code>，例如提交表单。</p>
      <p>当 <code>ok</code> 事件回调函数显式的返回 <code>false</code>，或返回的 <code>Promise</code> 对象被 <code>reject</code>，将阻止 <code>Modal</code> 关闭。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const visible = ref<boolean>(false);
      const showModal = () => visible.value = true;

      const handleCancel = () => console.log("Cancel");;
      const handleOk = () => {
        return new Promise((resolve, reject) => {
          // 模拟异步任务的执行
          const task = () => {
            // bool 为 true 表示异步任务执行成功
            // bool 为 false 表示异步任务执行失败
            const bool = Math.random() > 0.5;

            // 提示执行结果
            if (!bool) {
              Message.error("Oops errors!");
            }

            // 告知 Modal 执行结果，resolve 时对话框关闭，reject 时对话框保持显示状态
            bool ? resolve() : reject();
          };

          setTimeout(task, 1000);
        });
      };

      return {
        code,
        visible,
        showModal,
        handleCancel,
        handleOk
      };
    }
  });
</script>