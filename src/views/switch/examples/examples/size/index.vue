<template>
  <vui-example id="example-switch-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 使用小号或大号开关。</p>
    </template>
    <template v-slot:demo>
      <div class="example-switch-size">
        <section>
          <vui-switch size="small" />
          <vui-switch />
          <vui-switch size="large" />
        </section>
        <section>
          <vui-switch type="round" size="small" />
          <vui-switch type="round" />
          <vui-switch type="round" size="large" />
        </section>
        <section>
          <vui-switch type="line" size="small" />
          <vui-switch type="line" />
          <vui-switch type="line" size="large" />
        </section>
      </div>
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

<style>
  .example-switch-size section { display:flex; justify-content:flex-start; align-items:center; }
  .example-switch-size section + section { margin-top:16px; }
  .example-switch-size section .vui-switch + .vui-switch { margin-left:16px; }
</style>