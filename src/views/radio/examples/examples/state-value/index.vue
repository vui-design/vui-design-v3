<template>
  <vui-example id="example-radio-state-value" v-bind:code="code">
    <template v-slot:title>自定义状态值</template>
    <template v-slot:description>
      <p>设置 <code>Radio</code> 选中/未选中时的状态值，默认为 <code>true</code> / <code>false</code>。</p>
    </template>
    <template v-slot:demo>
      <vui-radio
        v-model:checked="value"
        v-bind:checkedValue="1"
        v-bind:uncheckedValue="0"
      >
        Radio
      </vui-radio>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<number>(0);

      watch(value, (value: number) => {
        console.log(value);
      });

      return {
        code,
        value
      };
    }
  });
</script>