<template>
  <vui-example id="example-avatar-group" v-bind:code="code">
    <template v-slot:title>头像组合</template>
    <template v-slot:description>
      <p>头像组合展现。</p>
    </template>
    <template v-slot:demo>
      <div class="example-avatar-group">
        <vui-avatar-group>
          <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <a href="https://github.com/vui-design/vui-design" target="_blank">
            <vui-avatar style="background-color: #f56a00">U</vui-avatar>
          </a>
          <vui-tooltip content="User Name">
            <vui-avatar icon="user" style="background-color: #52c41a" />
          </vui-tooltip>
          <vui-avatar icon="group" style="background-color: #2d8cf0" />
        </vui-avatar-group>
        <vui-avatar-group v-bind:maxCount="2">
          <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <a href="https://github.com/vui-design/vui-design" target="_blank">
            <vui-avatar style="background-color: #f56a00">U</vui-avatar>
          </a>
          <vui-tooltip content="User Name">
            <vui-avatar icon="user" style="background-color: #52c41a" />
          </vui-tooltip>
          <vui-avatar icon="group" style="background-color: #2d8cf0" />
        </vui-avatar-group>
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
  .example-avatar-group .vui-avatar-group + .vui-avatar-group { margin-left:16px; }
</style>