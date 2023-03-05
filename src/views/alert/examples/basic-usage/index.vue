<template>
  <vui-example id="example-alert-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-alert message="Infomation" />
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>基本用法，适用于简短的警告提示。</p>
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