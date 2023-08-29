<template>
  <vui-example v-bind:code="code" id="example-steps-icon">
    <template v-slot:title>自定义图标的步骤条</template>
    <template v-slot:description>
      <p>通过 <code>Step</code> 的 <code>icon</code> 属性或插槽，可以自定义步骤图标。</p>
    </template>
    <template v-slot:demo>
      <vui-steps v-bind:step="2">
        <vui-step icon="user" title="Login" />
        <vui-step icon="shield-flash" title="Verification" />
        <vui-step icon="loading" title="Pay" />
        <vui-step icon="checkmark-circle" title="Done" />
      </vui-steps>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>