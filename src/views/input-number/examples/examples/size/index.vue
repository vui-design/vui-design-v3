<template>
  <vui-example id="example-input-number-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>三种大小的数字输入框。</p>
    </template>
    <template v-slot:demo>
      <div class="example-input-number-size">
        <vui-segments v-model:activeKey="size">
          <vui-segments-item key="small">Small</vui-segments-item>
          <vui-segments-item key="medium">Medium</vui-segments-item>
          <vui-segments-item key="large">Large</vui-segments-item>
        </vui-segments>
        <br />
        <vui-input-number v-model:value="value" v-bind:size="size" />
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
      const size = ref<string>("medium");
      const value = ref<number>(1);

      return {
        code,
        size,
        value
      };
    }
  });
</script>

<style>
  .example-input-number-size .vui-input-number { margin-top:32px; }
</style>