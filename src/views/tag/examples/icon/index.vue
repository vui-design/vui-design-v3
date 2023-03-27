<template>
  <vui-example id="example-tag-icon" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-tag-icon">
        <vui-tag icon="chat-ellipsis-filled" color="primary">Comment</vui-tag>
        <vui-tag icon="thumb-up-filled" color="success">Thumb up</vui-tag>
        <vui-tag icon="thumb-down-filled" color="error">Thumb down</vui-tag>
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
  .example-tag-icon { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-icon .vui-tag + .vui-tag { margin-left:8px; }
</style>