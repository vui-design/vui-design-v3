<template>
  <vui-example id="example-popover-control" v-bind:code="code">
    <template v-slot:title>从浮层内关闭</template>
    <template v-slot:description>
      <p>使用 <code>visible</code> 属性控制浮层显示，支持 <code>v-model</code> 双向绑定数据。</p>
    </template>
    <template v-slot:demo>
      <vui-popover
        v-model:visible="visible"
        trigger="click"
        title="Title"
      >
        <vui-button>Click me</vui-button>
        <template v-slot:content>
          <a href="javascript:;" v-on:click="handleClose">Click to close the popover.</a>
        </template>
      </vui-popover>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const visible = ref<boolean>(false);

      watch(visible, (value: boolean) => {
        console.log(value);
      });

      const handleClose = () => {
        visible.value = false;
      };

      return {
        code,
        visible,
        handleClose
      };
    }
  });
</script>