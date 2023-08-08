const code =
`<template>
  <div class="example-tag-closable">
    <vui-tag v-model:visible="visible1" closable>Tag 1</vui-tag>
    <vui-tag v-model:visible="visible2" closable v-on:close="handleClose">Tag 2</vui-tag>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const visible1 = ref<boolean>(true);
      const visible2 = ref<boolean>(true);

      const handleClose = (e: MouseEvent) => {
        console.log(e);
      };

      return {
        visible1,
        visible2,
        handleClose
      };
    }
  });
</script>

<style>
  .example-tag-closable { display:flex; justify-content:flex-start; align-items:flex-start; gap:8px; }
</style>
`;

export default code;