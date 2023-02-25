<template>
  <vui-example id="example-radio-disabled" v-bind:code="code">
    <template v-slot:demo>
      <vui-space>
        <vui-radio v-model:checked="checked1" disabled>Radio</vui-radio>
        <vui-radio v-model:checked="checked2" disabled>Radio</vui-radio>
      </vui-space>
    </template>
    <template v-slot:title>禁用状态</template>
    <template v-slot:description>
      <p>通过设置 <code>disabled</code> 属性来禁用单选框。</p>
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
      const checked1 = ref(true);
      const checked2 = ref(false);

      return {
        code,
        checked1,
        checked2
      };
    }
  });
</script>