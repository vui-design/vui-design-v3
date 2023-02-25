<template>
  <vui-example id="example-checkbox-condition" v-bind:code="code">
    <template v-slot:demo>
      <vui-checkbox v-bind:checked="checked" v-on:change="handleChange">
        Checkbox
      </vui-checkbox>
    </template>
    <template v-slot:title>按条件勾选</template>
    <template v-slot:description>
      <p>可以判断是否需要勾选/取消勾选。</p>
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
      const checked = ref(false);
      const handleChange = newValue => {
        const message = newValue ? "您确认要勾选吗？" : "您确认要取消勾选吗？";

        if (confirm(message)) {
          checked.value = newValue;
        }
      };

      return {
        code,
        checked,
        handleChange
      };
    }
  });
</script>