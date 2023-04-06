<template>
  <vui-example id="example-input-disabled" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-input-disabled">
        <vui-input disabled placeholder="Enter something..." />
        <vui-input disabled prepend="https://github.com/u/" placeholder="Enter something..." />
        <vui-input disabled prefix="mic" placeholder="Enter something..." />
      </div>
    </template>
    <template v-slot:title>禁用状态</template>
    <template v-slot:description>
      <p>通过添加 <code>disabled</code> 属性将文本框设为禁用状态。</p>
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

<style>
  .example-input-disabled .vui-input + .vui-input { margin-top:24px; }
</style>