<template>
  <vui-example id="example-progress-stroke-color" v-bind:code="code">
    <template v-slot:title>自定义颜色</template>
    <template v-slot:description>
      <p>通过 <code>strokeColor</code> 自定义颜色（会覆盖 <code>status</code> 状态下的默认颜色）。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-stroke-color">
        <vui-progress v-bind:percentage="50" strokeColor="#722ed1" />
        <vui-space block>
          <vui-progress type="circle" v-bind:percentage="75" status="exception" strokeColor="#f8ac59" />
          <vui-progress type="dashboard" v-bind:percentage="100" strokeColor="#1ab394" />
        </vui-space>
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
  .example-progress-stroke-color .vui-progress-line { margin-bottom:16px; }
</style>