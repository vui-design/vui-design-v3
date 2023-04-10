<template>
  <vui-example id="example-textarea-clearable" v-bind:code="code">
    <template v-slot:demo>
      <vui-textarea v-model:value="value" clearable placeholder="Enter something..." />
    </template>
    <template v-slot:title>可清空</template>
    <template v-slot:description>
    <p>含有清空图标的文本域，点击图标清空所有内容。</p>
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