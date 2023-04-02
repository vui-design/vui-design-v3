const code =
`<template>
  <vui-space>
    <vui-button type="primary" v-on:click="showConfirm">Confirm</vui-button>
    <vui-button v-on:click="showPromiseConfirm">With promise</vui-button>
    <vui-button type="danger" ghost v-on:click="showDeleteConfirm">Delete</vui-button>
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Modal, Message } from "vui-design";

  export default defineComponent({
    setup() {
      const showConfirm = () => {
        Modal.confirm({
          title: "Do you want to delete these items?",
          description: "Some descriptions...",
          onCancel: () => console.log("Cancel"),
          onOk: () => console.log("OK")
        });
      };

      const showPromiseConfirm = () => {
        Modal.confirm({
          title: "Do you want to delete these items?",
          description: "When clicked the OK button, this dialog will be closed after 1 second...",
          cancelText: "Cancel",
          okText: "OK",
          onCancel: () => console.log("Cancel"),
          onOk: async function() {
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

                // 告知 Modal 执行结果，resolve 时确认框关闭，reject 时确认框保持显示状态
                bool ? resolve() : reject();
              };

              setTimeout(task, 1000);
            });
          }
        });
      };

      const showDeleteConfirm = () => {
        Modal.confirm({
          title: "Are you sure delete this task?",
          description: "Some descriptions...",
          cancelText: "No",
          okText: "Yes",
          cancelButtonProps: {
            type: "text"
          },
          okButtonProps: {
            type: "danger"
          },
          cancel: () => console.log("No"),
          ok: () => console.log("Yes")
        });
      };

      return {
        showConfirm,
        showDeleteConfirm,
        showPromiseConfirm
      };
    }
  });
</script>
`;

export default code;