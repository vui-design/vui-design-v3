<template>
  <vui-example id="example-input-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-input v-model:value="value" placeholder="Basic usage" />
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法，可以使用 <code>v-model</code> 双向绑定数据。</p>
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