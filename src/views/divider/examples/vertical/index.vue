<template>
  <vui-example id="example-divider-vertical" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-divider-vertical">
        Text
        <vui-divider direction="vertical" />
        <a href="javascript:;">Link</a>
        <vui-divider direction="vertical" />
        <a href="javascript:;">Link</a>
      </div>
    </template>
    <template v-slot:title>垂直分割线</template>
    <template v-slot:description>
      <p>使用 <code>direction="vertical"</code> 设置行内垂直方向的分割线。</p>
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