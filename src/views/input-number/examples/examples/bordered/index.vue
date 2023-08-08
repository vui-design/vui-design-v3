<template>
  <vui-example id="example-input-number-bordered" v-bind:code="code">
    <template v-slot:title>无边框</template>
    <template v-slot:description>
      <p>无边框的数字输入框。</p>
    </template>
    <template v-slot:demo>
      <vui-input-number v-model:value="value" v-bind:bordered="false" v-bind:min="1" v-bind:max="100" />
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<number>(1);

      return {
        code,
        value
      };
    }
  });
</script>