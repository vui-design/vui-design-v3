<template>
  <vui-example id="example-popconfirm-local" v-bind:code="code">
    <template v-slot:demo>
      <vui-popconfirm
        title="Are you sure delete this task?"
        cancelText="No"
        okText="Yes"
        v-on:cancel="handleCancel"
        v-on:ok="handleOk"
      >
        <a href="javascript:;">Delete</a>
      </vui-popconfirm>
    </template>
    <template v-slot:title>国际化</template>
    <template v-slot:description>
      <p>使用 <code>cancelText</code> 和 <code>okText</code> 自定义按钮文字。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "src/components/example";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const handleCancel = () => {
        console.log("Clicked on No");
      };
      const handleOk = () => {
        console.log("Clicked on Yes");
      };

      return {
        code,
        handleCancel,
        handleOk
      };
    }
  });
</script>