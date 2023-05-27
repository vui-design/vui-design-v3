const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
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
        visible,
        showModal,
        handleCancel,
        handleOk
      };
    }
  });
</script>
`;

export default code;