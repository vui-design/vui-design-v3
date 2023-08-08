const code =
`<template>
  <div class="example-switch-type">
    <vui-switch v-model:checked="checked1" />
    <vui-switch v-model:checked="checked2" type="round" />
    <vui-switch v-model:checked="checked3" type="line" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked1 = ref<boolean>(true);
      const checked2 = ref<boolean>(true);
      const checked3 = ref<boolean>(true);

      return {
        checked1,
        checked2,
        checked3
      };
    }
  });
</script>

<style>
  .example-switch-type { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-type .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;