<template>
  <vui-example id="example-input-number-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-input-number v-model:value="value" v-bind:min="1" v-bind:max="100" />
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法，可以通过输入、鼠标点击或键盘的上下键来改变数值大小。使用 <code>v-model</code> 双向绑定数据。</p>
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