<template>
  <vui-example id="example-switch-disabled" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-switch-disabled">
        <vui-switch v-model:checked="checked" v-bind:disabled="disabled" />
        <vui-button type="primary" size="small" v-on:click="handleToggle">
          {{disabled ? "Enabled" : "Disabled"}}
        </vui-button>
      </div>
    </template>
    <template v-slot:title>禁用状态</template>
    <template v-slot:description>
      <p>添加 <code>disabled</code> 属性即可让开关处于禁用状态。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked = ref<boolean>(false);
      const disabled = ref<boolean>(true);
      const handleToggle = () => disabled.value = !disabled.value;

      watch(checked, value => {
        console.log(value);
      });

      return {
        code,
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