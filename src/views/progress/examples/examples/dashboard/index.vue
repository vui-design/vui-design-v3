<template>
  <vui-example id="example-progress-dashboard" v-bind:code="code">
    <template v-slot:title>仪表盘</template>
    <template v-slot:description>
      <p>通过设置 <code>type</code> 为 <code>dashboard</code>，可以很方便地实现仪表盘样式的进度条。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-dashboard">
        <vui-progress type="dashboard" v-bind:percentage="75" />
        <vui-progress type="dashboard" v-bind:percentage="75" status="exception" />
        <vui-progress type="dashboard" v-bind:percentage="100" />
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
  .example-progress-dashboard { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-dashboard .vui-progress + .vui-progress { margin-left:16px; }
</style>