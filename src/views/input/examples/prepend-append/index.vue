<template>
  <vui-example id="example-input-prepend-append" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-input-prepend-append">
        <vui-input prepend="https://github.com/u/" placeholder="Enter something..." />
        <vui-input append="@qq.com" placeholder="Enter something..." />
        <vui-input placeholder="Enter something...">
          <template v-slot:prepend>https://</template>
          <template v-slot:append>.com</template>
        </vui-input>
      </div>
    </template>
    <template v-slot:title>前置/后置标签</template>
    <template v-slot:description>
      <p>用于配置一些固定组合。</p>
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
  .example-input-prepend-append .vui-input:not(:first-child) { margin-top:24px; }
</style>