<template>
  <vui-example id="example-progress-stroke-linecap" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-progress-stroke-linecap">
        <vui-progress v-bind:percentage="50" strokeLinecap="square" />
        <vui-space block>
          <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeLinecap="square" />
          <vui-progress type="dashboard" v-bind:percentage="100" strokeLinecap="square" />
        </vui-space>
      </div>
    </template>
    <template v-slot:title>线条边缘形状</template>
    <template v-slot:description>
      <p>通过 <code>strokeLinecap</code> 可以调整线条边缘形状。</p>
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
  .example-progress-stroke-linecap .vui-progress-line { margin-bottom:16px; }
</style>