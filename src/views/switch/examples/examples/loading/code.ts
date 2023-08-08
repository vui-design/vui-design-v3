const code =
`<template>
  <div class="example-switch-loading">
    <vui-switch v-bind:checked="checked1" loading />
    <vui-switch v-bind:checked="checked2" loading />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked1 = ref<boolean>(true);
      const checked2 = ref<boolean>(false);

      return {
        checked1,
        checked2
      };
    }
  });
</script>

<style>
  .example-switch-loading { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-loading .vui-switch + .vui-switch { margin-left:16px; }
</style>
`;

export default code;