<template>
  <vui-example id="example-popconfirm-promise" v-bind:code="code">
    <template v-slot:demo>
      <vui-popconfirm
        title="Are you sure delete this task?"
        v-on:cancel="handleCancel"
        v-on:ok="handleOk"
      >
        <vui-button type="primary">Open Popconfirm with Promise</vui-button>
      </vui-popconfirm>
    </template>
    <template v-slot:title>基于 Promise 的异步关闭</template>
    <template v-slot:description>
      <p>点击确定后异步关闭 <code>Popconfirm</code>，例如提交表单。</p>
      <p>当 <code>ok</code> 事件回调函数显式的返回 <code>false</code>，或返回的 <code>Promise </code> 对象被 <code>reject</code>，将阻止 <code>Popconfirm</code> 关闭。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Message } from "vui-design";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
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
        code,
        handleCancel,
        handleOk
      };
    }
  });
</script>