<template>
  <vui-example id="example-tag-closable" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-tag-closable">
        <vui-tag v-model:visible="visible1" closable>Tag 1</vui-tag>
        <vui-tag v-model:visible="visible2" closable v-on:close="handleClose">Tag 2</vui-tag>
      </div>
    </template>
    <template v-slot:title>可关闭</template>
    <template v-slot:description>
      <p>通过添加 <code>closable</code> 属性来定义一个可关闭的标签，可关闭标签具有 <code>onClose</code> 事件。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const visible1 = ref<boolean>(true);
      const visible2 = ref<boolean>(true);

      const handleClose = (e: MouseEvent) => {
        console.log(e);
      };

      return {
        code,
        visible1,
        visible2,
        handleClose
      };
    }
  });
</script>

<style>
  .example-tag-closable { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-tag-closable .vui-tag + .vui-tag { margin-left:8px; }
</style>