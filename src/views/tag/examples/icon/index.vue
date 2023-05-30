<template>
  <vui-example id="example-tag-icon" v-bind:code="code">
    <template v-slot:demo>
      <div>
        <div class="example-tag-icon">
          <vui-divider orientation="left">Normal</vui-divider>
          <div class="vui-tag-list">
            <vui-tag color="primary" icon="chat-ellipsis-filled">Comment</vui-tag>
            <vui-tag color="success" icon="thumb-up-filled">Thumb Up</vui-tag>
            <vui-tag color="error" icon="thumb-down-filled">Thumb Down</vui-tag>
          </div>
        </div>
        <div class="example-tag-icon">
          <vui-divider orientation="left">Round & Ghost</vui-divider>
          <div class="vui-tag-list">
            <vui-tag shape="round" color="primary" ghost icon="time-filled">Todo</vui-tag>
            <vui-tag shape="round" color="success" ghost icon="checkmark-circle-filled">Approved</vui-tag>
            <vui-tag shape="round" color="error" ghost icon="crossmark-circle-filled">Approval Failed</vui-tag>
          </div>
        </div>
        <div class="example-tag-icon">
          <vui-divider orientation="left">Borderless & Round & Ghost</vui-divider>
          <div class="vui-tag-list">
            <vui-tag v-bind:bordered="false" shape="round" color="primary" ghost icon="time-filled">Todo</vui-tag>
            <vui-tag v-bind:bordered="false" shape="round" color="success" ghost icon="checkmark-circle-filled">Approved</vui-tag>
            <vui-tag v-bind:bordered="false" shape="round" color="error" ghost icon="crossmark-circle-filled">Approval Failed</vui-tag>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:title>图标标签</template>
    <template v-slot:description>
      <p>如果需要在 <code>Tag</code> 内插入一个图标，可以设置 <code>icon</code> 属性，或者直接在 <code>Tag</code> 内使用 <code>Icon</code> 组件。</p>
      <p>使用 <code>Tag</code> 的 <code>icon</code> 属性，图标将被插入到按钮左侧，如果需要自定义位置，请使用 <code>Icon</code> 组件。</p>
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
      return {
        code
      };
    }
  });
</script>

<style>
  .example-tag-icon + .example-tag-icon { margin-top:24px; }
  .example-tag-icon .vui-divider { margin-top:0; }
  .example-tag-icon .vui-tag-list { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; row-gap:8px; }
  .example-tag-icon .vui-tag { margin-right:8px; }
</style>