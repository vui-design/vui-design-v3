<template>
  <vui-example id="example-popconfirm-icon" v-bind:code="code">
    <template v-slot:demo>
      <vui-popconfirm
        title="Are you sure delete this task?"
        v-on:cancel="handleCancel"
        v-on:ok="handleOk"
      >
        <template v-slot:icon>
          <vui-icon type="warning-filled" style="color: #f00;" />
        </template>
        <a href="javascript:;">Delete</a>
      </vui-popconfirm>
    </template>
    <template v-slot:title>自定义图标</template>
    <template v-slot:description>
      <p>使用 <code>icon</code> 插槽自定义图标。</p>
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