<template>
  <vui-example id="example-switch-type" v-bind:code="code">
    <template v-slot:title>开关类型</template>
    <template v-slot:description>
      <p>开关分为 <code>circle</code> - 圆形（默认）、<code>round</code> - 圆角、<code>line</code> - 线性三种类型</p>
    </template>
    <template v-slot:demo>
      <div class="example-switch-type">
        <vui-switch v-model:checked="checked1" />
        <vui-switch v-model:checked="checked2" type="round" />
        <vui-switch v-model:checked="checked3" type="line" />
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
      const checked1 = ref<boolean>(true);
      const checked2 = ref<boolean>(true);
      const checked3 = ref<boolean>(true);

      return {
        code,
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