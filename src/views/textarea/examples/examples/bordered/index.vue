<template>
  <vui-example id="example-textarea-bordered" v-bind:code="code">
    <template v-slot:title>无边框</template>
    <template v-slot:description>
      <p>无边框的文本域。</p>
    </template>
    <template v-slot:demo>
      <vui-textarea v-model:value="value" v-bind:bordered="false" placeholder="Borderless" />
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
      const value = ref<string>("");

      return {
        code,
        value
      };
    }
  });
</script>