<template>
  <vui-example id="example-input-number-clearable" v-bind:code="code">
    <template v-slot:demo>
      <vui-input-number v-model:value="value" clearable />
    </template>
    <template v-slot:title>可清空</template>
    <template v-slot:description>
    <p>含有清空图标的输入框，点击图标清空所有内容。</p>
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
      const value = ref<number>(1);

      return {
        code,
        value
      };
    }
  });
</script>