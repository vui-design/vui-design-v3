const code =
`<template>
  <vui-popconfirm
    title="Are you sure delete this task?"
    v-on:cancel="handleCancel"
    v-on:ok="handleOk"
  >
    <vui-button type="primary">Open Popconfirm with Promise</vui-button>
  </vui-popconfirm>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";

  export default defineComponent({
    setup() {
      const handleCancel = () => {
        console.log("点击了取消");
      };
      const handleOk = () => {
        return new Promise((resolve, reject) => {
          // 模拟异步任务的执行
          const task = () => {
            // bool 为 true 表示异步任务执行成功
            // bool 为 false 表示异步任务执行失败
            const bool = Math.random() > 0.5;

            // 提示执行结果
            if (bool) {
              Message.success("Task deleted successfully!");
            }
            else {
              Message.error("Task deleted failed!");
            }

            // 告知 Popconfirm 执行结果，resolve 时确认框关闭，reject 时确认框保持显示状态
            bool ? resolve() : reject();
          };

          setTimeout(task, 1500);
        });
      };

      return {
        handleCancel,
        handleOk
      };
    }
  });
</script>
`;

export default code;