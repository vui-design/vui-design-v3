<template>
  <vui-example id="example-avatar-type" v-bind:code="code">
    <template v-slot:title>类型</template>
    <template v-slot:description>
      <p>支持三种类型：图片、图标以及字符，其中图标和字符可以自定义颜色及背景色。</p>
    </template>
    <template v-slot:demo>
      <div class="example-avatar-type">
        <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <vui-avatar icon="user" />
        <vui-avatar>U</vui-avatar>
        <vui-avatar>USER</vui-avatar>
        <vui-avatar icon="user" style="background-color: #52c41a;" />
        <vui-avatar style="background-color: #fde3cf; color: #f56a00;">U</vui-avatar>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-avatar-type .vui-avatar + .vui-avatar { margin-left:16px; }
</style>