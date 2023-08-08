<template>
  <vui-example id="example-checkbox-disabled" v-bind:code="code">
    <template v-slot:title>禁用状态</template>
    <template v-slot:description>
      <p>通过设置 <code>disabled</code> 属性来禁用多选框。</p>
    </template>
    <template v-slot:demo>
      <vui-space>
        <vui-checkbox v-model:checked="checked1" disabled>Checkbox</vui-checkbox>
        <vui-checkbox v-model:checked="checked2" disabled>Checkbox</vui-checkbox>
      </vui-space>
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
      const checked1 = ref<boolean>(true);
      const checked2 = ref<boolean>(false);

      return {
        code,
        checked1,
        checked2
      };
    }
  });
</script>