const code =
`<template>
  <vui-radio v-bind:checked="checked" v-on:change="handleChange">
    Radio
  </vui-radio>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Modal } from "vui-design";

  export default defineComponent({
    setup() {
      const checked = ref<boolean>(false);
      const handleChange = (newValue: boolean) => {
        if (!newValue) {
          return;
        }

        Modal.confirm({
          title: "Are you sure you want to check?",
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