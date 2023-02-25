const code =
`<template>
  <div class="example-checkbox-controller">
    <vui-checkbox v-model:checked="checked" v-bind:disabled="disabled">
      {{checked ? "Checked" : "Unchecked"}} - {{disabled ? "Disabled" : "Enabled"}}
    </vui-checkbox>
    <section>
      <vui-button type="primary" size="small" v-on:click="handleToggleChecked">
        {{checked ? "Unchecked" : "Checked"}}
      </vui-button>
      <vui-button type="primary" size="small" v-on:click="handleToggleDisabled">
        {{disabled ? "Enabled" : "Disabled"}}
      </vui-button>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const checked = ref(false);
      const disabled = ref(false);

      const handleToggleChecked = () => {
        checked.value = !checked.value;
      };
      const handleToggleDisabled = () => {
        disabled.value = !disabled.value;
      };

      return {
        checked,
        disabled,
        handleToggleChecked,
        handleToggleDisabled
      };
    }
  });
</script>

<style>
  .example-checkbox-controller { line-height:1; }
  .example-checkbox-controller section { margin-top:16px; }
  .example-checkbox-controller section .vui-button + .vui-button { margin-left:16px; }
</style>
`;

export default code;