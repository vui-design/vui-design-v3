<template>
  <vui-example id="example-input-bordered" v-bind:code="code">
    <template v-slot:demo>
      <vui-input v-model:value="value" v-bind:bordered="false" placeholder="Borderless" />
    </template>
    <template v-slot:title>无边框</template>
    <template v-slot:description>
      <p>无边框的输入框。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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