<template>
  <vui-example id="example-textarea-resizable" v-bind:code="code">
    <template v-slot:demo>
      <vui-textarea v-model:value="value" resizable placeholder="Enter something..." />
    </template>
    <template v-slot:title>手动改变高度</template>
    <template v-slot:description>
      <p>启用 <code>resizable</code> 属性，用户可手动拖曳改变文本域的高度。</p>
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
      const value = ref<string>("");

      return {
        code,
        value
      };
    }
  });
</script>