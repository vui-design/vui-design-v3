const code =
`<template>
  <div class="example-tag-checkable">
    <vui-tag color="primary" checkable v-model:checked="checked1">Tag 1</vui-tag>
    <vui-tag color="info" checkable v-model:checked="checked2">Tag 2</vui-tag>
    <vui-tag color="warning" checkable v-model:checked="checked3">Tag 3</vui-tag>
    <vui-tag color="success" checkable v-model:checked="checked4">Tag 4</vui-tag>
    <vui-tag color="error" checkable v-model:checked="checked5">Tag 5</vui-tag>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked1 = ref<boolean>(false);
      const checked2 = ref<boolean>(false);
      const checked3 = ref<boolean>(false);
      const checked4 = ref<boolean>(false);
      const checked5 = ref<boolean>(false);

      return {
        checked1,
        checked2,
        checked3,
        checked4,
        checked5
      };
    }
  });
</script>

<style>
  .example-tag-checkable { display:flex; justify-content:flex-start; align-items:flex-start; flex-wrap:wrap; row-gap:8px; }
  .example-tag-checkable .vui-tag { margin-right:8px; }
</style>
`;

export default code;