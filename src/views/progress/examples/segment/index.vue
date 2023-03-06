<template>
  <vui-example id="example-progress-segment" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-progress-segment">
        <vui-progress v-bind:percentage="60" v-bind:success="30" />
        <vui-space block>
          <vui-progress type="circle" v-bind:percentage="60" v-bind:success="{ percentage: 30 }" />
          <vui-progress type="dashboard" v-bind:percentage="60" v-bind:success="{ percentage: 30, strokeColor: '#1ab394' }" />
        </vui-space>
      </div>
    </template>
    <template v-slot:title>分段进度条</template>
    <template v-slot:description>
      <p>分段的进度条。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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
  .example-progress-segment .vui-progress-line { margin-bottom:16px; }
</style>