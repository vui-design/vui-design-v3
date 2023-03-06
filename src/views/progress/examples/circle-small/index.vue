<template>
  <vui-example id="example-progress-circle-small" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-progress-circle-small">
        <vui-progress type="circle" size="small" v-bind:percentage="75" />
        <vui-progress type="circle" size="small" v-bind:percentage="75" status="exception" />
        <vui-progress type="circle" size="small" v-bind:percentage="100" />
      </div>
    </template>
    <template v-slot:title>小型进度环</template>
    <template v-slot:description>
      <p>适合放在较狭窄的区域内。</p>
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
  .example-progress-circle-small { display:flex; justify-content:flex-start; align-items:center; }
  .example-progress-circle-small .vui-progress + .vui-progress { margin-left:16px; }
</style>