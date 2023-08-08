<template>
  <vui-example id="example-input-number-disabled" v-bind:code="code">
    <template v-slot:title>禁用</template>
    <template v-slot:description>
      <p>通过添加 <code>disabled</code> 属性将数字输入框设为禁用状态。</p>
    </template>
    <template v-slot:demo>
      <vui-input-number v-model:value="value" disabled />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
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