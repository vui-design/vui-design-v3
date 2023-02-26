<template>
  <vui-example id="example-popconfirm-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-popconfirm
        title="Are you sure delete this task?"
        v-on:cancel="handleCancel"
        v-on:ok="handleOk"
      >
        <a href="javascript:;">Delete</a>
      </vui-popconfirm>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
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
        console.log("点击了确认");
      };

      return {
        code,
        handleCancel,
        handleOk
      };
    }
  });
</script>