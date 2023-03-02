const code =
`<template>
  <vui-switch v-bind:checked="checked" v-on:change="handleChange" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref(false);
      const handleChange = newValue => {
        const message = newValue ? "您确认要打开开关吗？" : "您确认要关闭开关吗？";

        if (confirm(message)) {
          checked.value = newValue;
        }
      };

      return {
        checked,
        handleChange
      };
    }
  });
</script>
`;

export default code;