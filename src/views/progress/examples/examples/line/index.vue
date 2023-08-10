<template>
  <vui-example id="example-progress-line" v-bind:code="code">
    <template v-slot:title>进度条</template>
    <template v-slot:description>
      <p>处在不同状态下的进度条，当 <code>percentage</code> 为 <code>100</code> 时，自动将状态置为 <code>success</code>。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-line">
        <vui-progress v-bind:percentage="30" />
        <vui-progress v-bind:percentage="50" status="active" />
        <vui-progress v-bind:percentage="70" status="exception" />
        <vui-progress v-bind:percentage="100" />
        <vui-progress v-bind:percentage="50" v-bind:showInfo="false" />
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
  .example-progress-line .vui-progress + .vui-progress { margin-top:16px; }
</style>