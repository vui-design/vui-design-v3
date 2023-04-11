<template>
  <vui-example id="example-rate-text" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-rate-text">
        <vui-rate v-model:value="value" v-bind:tooltips="tooltips" />
        <span>{{tooltips[value - 1]}}</span>
      </div>
    </template>
    <template v-slot:title>文案提示</template>
    <template v-slot:description>
      <p>给评分组件加上文案提示。</p>
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
      const value = ref<number>(3);
      const tooltips = ref<string[]>(["terrible", "bad", "normal", "good", "wonderful"]);

      return {
        code,
        value,
        tooltips
      };
    }
  });
</script>

<style>
  .example-rate-text { display:flex; justify-content:flex-start; align-items:center; line-height:1; }
  .example-rate-text span { margin-left:16px; }
</style>