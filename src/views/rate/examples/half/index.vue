<template>
  <vui-example id="example-rate-half" v-bind:code="code">
    <template v-slot:demo>
      <vui-rate v-model:value="value" allowHalf />
    </template>
    <template v-slot:title>半星</template>
    <template v-slot:description>
      <p>支持选中半星。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<number>(2.5);

      watch(value, value => {
        console.log(value);
      });

      return {
        code,
        value
      };
    }
  });
</script>