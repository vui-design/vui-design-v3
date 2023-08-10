<template>
  <vui-example id="example-progress-circle-micro" v-bind:code="code">
    <template v-slot:title>响应式进度环</template>
    <template v-slot:description>
      <p>响应式进度环，当进度环的画布宽度 <code>width</code> 小于等于 <code>20</code> 时，进度信息将不会显示在进度环里面，而是以 <code>Tooltip</code> 的形式显示。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-circle-micro">
        <vui-progress
          type="circle"
          v-bind:width="14"
          v-bind:stroke-width="2"
          v-bind:percentage="75"
          v-bind:formatter="formatter"
        />
        <span>代码发布</span>
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
      const formatter = (percentage: number) => {
        return `进行中，已完成${percentage}%`;
      };

      return {
        code,
        formatter
      };
    }
  });
</script>

<style>
  .example-progress-circle-micro { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-circle-micro .vui-progress + span { margin-left:8px; }
</style>