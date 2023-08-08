<template>
  <vui-example id="example-radio-controller" v-bind:code="code">
    <template v-slot:title>与其它组件通信</template>
    <template v-slot:description>
      <p>与其它组件进行数据联动。</p>
    </template>
    <template v-slot:demo>
      <div class="example-radio-controller">
        <vui-radio v-model:checked="checked" v-bind:disabled="disabled">
          {{checked ? "Checked" : "Unchecked"}} - {{disabled ? "Disabled" : "Enabled"}}
        </vui-radio>
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
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked = ref<boolean>(false);
      const disabled = ref<boolean>(false);

      const handleToggleChecked = () => {
        checked.value = !checked.value;
      };
      const handleToggleDisabled = () => {
        disabled.value = !disabled.value;
      };

      return {
        code,
        checked,
        disabled,
        handleToggleChecked,
        handleToggleDisabled
      };
    }
  });
</script>

<style>
  .example-radio-controller { line-height:1; }
  .example-radio-controller section { margin-top:16px; }
  .example-radio-controller section .vui-button + .vui-button { margin-left:16px; }
</style>