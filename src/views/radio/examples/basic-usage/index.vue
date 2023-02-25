<template>
  <vui-example id="example-radio-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-radio v-model:checked="checked">
        Radio
      </vui-radio>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>最简单的用法。</p>
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
      const checked = ref(false);

      watch(checked, value => {
        console.log(value);
      });

      return {
        code,
        checked
      };
    }
  });
</script>