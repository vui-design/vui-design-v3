<template>
  <vui-example id="example-divider-vertical" v-bind:code="code">
    <template v-slot:title>垂直分割线</template>
    <template v-slot:description>
      <p>指定 <code>direction</code> 为 <code>vertical</code> 即可使用行内垂直方向的分割线，垂直分割线不能带文字。</p>
    </template>
    <template v-slot:demo>
      <div class="example-divider-vertical">
        Text
        <vui-divider direction="vertical" />
        <a href="javascript:;">Link</a>
        <vui-divider direction="vertical" />
        <a href="javascript:;">Link</a>
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