<template>
  <vui-example id="example-input-password" v-bind:code="code">
    <template v-slot:title>密码框</template>
    <template v-slot:description>
      <p>密码框，可以切换显示隐藏密码。</p>
    </template>
    <template v-slot:demo>
      <vui-input-password v-model:value="value" placeholder="Please enter password..." />
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