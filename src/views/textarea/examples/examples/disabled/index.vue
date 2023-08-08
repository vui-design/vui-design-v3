<template>
  <vui-example id="example-textarea-disabled" v-bind:code="code">
    <template v-slot:title>禁用状态</template>
    <template v-slot:description>
      <p>通过添加 <code>disabled</code> 属性将文本域设为禁用状态。</p>
    </template>
    <template v-slot:demo>
      <vui-textarea disabled placeholder="Enter something..." />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
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