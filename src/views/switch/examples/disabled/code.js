const code =
`<template>
  <div class="example-switch-disabled">
    <vui-switch v-model:checked="checked" v-bind:disabled="disabled" />
    <vui-button type="primary" size="small" v-on:click="handleToggle">
      {{disabled ? "Enabled" : "Disabled"}}
    </vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref<boolean>(false);
      const disabled = ref<boolean>(true);
      const handleToggle = () => disabled.value = !disabled.value;

      watch(checked, value => {
        console.log(value);
      });

      return {
        checked,
        disabled,
        handleToggle
      };
    }
  });
</script>

<style>
  .example-switch-disabled { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-disabled .vui-button { margin-left:16px; }
</style>
`;

export default code;