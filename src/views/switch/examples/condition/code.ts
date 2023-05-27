const code =
`<template>
  <vui-switch v-bind:checked="checked" v-on:change="handleChange" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Modal } from "vui-design";

  export default defineComponent({
    setup() {
      const checked = ref(false);
      const handleChange = newValue => {
        Modal.confirm({
          title: newValue ? "Do you want to open this task?" : "Do you want to close this task?",
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