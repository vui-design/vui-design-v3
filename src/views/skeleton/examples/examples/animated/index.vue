<template>
  <vui-example id="example-skeleton-animated" v-bind:code="code">
    <template v-slot:title>动画效果</template>
    <template v-slot:description>
      <p>显示动画效果。</p>
    </template>
    <template v-slot:demo>
      <vui-skeleton animated />
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