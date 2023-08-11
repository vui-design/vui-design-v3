<template>
  <vui-example id="example-watermark-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的水印。</p>
    </template>
    <template v-slot:demo>
      <vui-watermark content="Vui Design Vue">
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