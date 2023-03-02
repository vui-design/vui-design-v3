<template>
  <vui-example id="example-switch-condition" v-bind:code="code">
    <template v-slot:demo>
      <vui-switch v-bind:checked="checked" v-on:change="handleChange" />
    </template>
    <template v-slot:title>按条件开/关</template>
    <template v-slot:description>
      <p>通过 <code>beforeChange</code> 函数可以阻止切换。</p>
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
        const message = newValue ? "您确认要打开开关吗？" : "您确认要关闭开关吗？";

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