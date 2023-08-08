<template>
  <vui-example id="example-input-addon" v-bind:code="code">
    <template v-slot:title>前置/后置标签</template>
    <template v-slot:description>
      <p>用于配置一些固定组合。</p>
    </template>
    <template v-slot:demo>
      <div class="example-input-addon">
        <vui-input addonBefore="https://github.com/u/" placeholder="Enter something..." />
        <vui-input addonAfter="@qq.com" placeholder="Enter something..." />
        <vui-input placeholder="Enter something...">
          <template v-slot:addonBefore>https://</template>
          <template v-slot:addonAfter>.com</template>
        </vui-input>
      </div>
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

<style>
  .example-input-addon .vui-input:not(:first-child) { margin-top:24px; }
</style>