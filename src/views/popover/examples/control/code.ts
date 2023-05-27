const code =
`<template>
  <vui-popover trigger="click" title="Title" v-model:visible="visible">
    <vui-button>Click me</vui-button>
    <template v-slot:content>
      <a href="javascript:;" v-on:click="handleClose">Click to close the popover.</a>
    </template>
  </vui-popover>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const visible = ref(false);

      watch(visible, value => {
        console.log(value);
      });

      const handleClose = () => {
        visible.value = false;
      };

      return {
        visible,
        handleClose
      };
    }
  });
</script>
`;

export default code;