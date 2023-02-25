const code =
`<template>
  <vui-radio v-bind:checked="checked" v-on:change="handleChange">
    Radio
  </vui-radio>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref(false);
      const handleChange = newValue => {
        if (newValue && confirm("您确认要勾选吗？")) {
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