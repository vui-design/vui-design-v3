<template>
  <vui-example id="example-input-number-digit" v-bind:code="code">
    <template v-slot:demo>
      <vui-input-number v-model:value="value" v-bind:step="0.1" v-bind:min="0" v-bind:max="10" />
    </template>
    <template v-slot:title>小数</template>
    <template v-slot:description>
      <p>和原生的数字输入框一样，<code>value</code> 的精度由 <code>step</code> 的小数位数决定。</p>
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
      const value = ref<number>(0);

      return {
        code,
        value
      };
    }
  });
</script>