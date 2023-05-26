const code =
`<template>
  <vui-checkbox v-bind:checked="checked" v-on:change="handleChange">
    Checkbox
  </vui-checkbox>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Modal } from "vui-design";

  export default defineComponent({
    setup() {
      const checked = ref(false);
      const handleChange = newValue => {
        Modal.confirm({
          title: newValue ? "Are you sure you want to check?" : "Are you sure you want to uncheck?",
          description: "Some descriptions...",
          onCancel: () => console.log("Cancel"),
          onOk: () => {
            checked.value = newValue;
          }
        });
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