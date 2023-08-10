<template>
  <vui-example id="example-progress-line-small" v-bind:code="code">
    <template v-slot:title>小型进度条</template>
    <template v-slot:description>
      <p>适合放在较狭窄的区域内。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-line-small">
        <vui-progress size="small" v-bind:percentage="30" />
        <vui-progress size="small" v-bind:percentage="50" status="active" />
        <vui-progress size="small" v-bind:percentage="70" status="exception" />
        <vui-progress size="small" v-bind:percentage="100" />
        <vui-progress size="small" v-bind:percentage="50" v-bind:showInfo="false" />
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
  .example-progress-line-small { width: 240px; }
  .example-progress-line-small .vui-progress + .vui-progress { margin-top:16px; }
</style>