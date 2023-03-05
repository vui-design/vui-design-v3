<template>
  <vui-example id="example-spin-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-spin />
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>一个简单的加载状态。</p>
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