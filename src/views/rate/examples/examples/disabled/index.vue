<template>
  <vui-example id="example-rate-disabled" v-bind:code="code">
    <template v-slot:title>禁用</template>
    <template v-slot:description>
      <p>禁用，无法进行鼠标交互。</p>
    </template>
    <template v-slot:demo>
      <vui-rate v-bind:value="2" disabled />
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