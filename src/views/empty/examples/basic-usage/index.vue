<template>
  <vui-example id="example-empty-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-empty />
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的展示。</p>
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