<template>
  <vui-example id="example-watermark-multi-line" v-bind:code="code">
    <template v-slot:title>多行水印</template>
    <template v-slot:description>
      <p>设置 <code>content</code>为字符串数组，以使用多行文字水印。</p>
    </template>
    <template v-slot:demo>
      <vui-watermark v-bind:content="['Vui Design Vue', 'User Name']">
        <div style="height: 480px;"></div>
      </vui-watermark>
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