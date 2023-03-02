<template>
  <vui-example id="example-switch-loading" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-switch-loading">
        <vui-switch v-bind:checked="checked1" loading />
        <vui-switch v-bind:checked="checked2" loading />
      </div>
    </template>
    <template v-slot:title>加载状态</template>
    <template v-slot:description>
      <p>标识开关操作仍在执行当中。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const checked1 = ref<boolean>(true);
      const checked2 = ref<boolean>(false);

      return {
        code,
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