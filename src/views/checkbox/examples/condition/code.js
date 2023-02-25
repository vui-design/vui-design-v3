const code =
`<template>
  <vui-checkbox v-bind:checked="checked" v-on:change="handleChange">
    Checkbox
  </vui-checkbox>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref(false);
      const handleChange = newValue => {
        const message = newValue ? "您确认要勾选吗？" : "您确认要取消勾选吗？";

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