<template>
  <vui-example id="example-progress-steps" v-bind:code="code">
    <template v-slot:title>步骤进度条</template>
    <template v-slot:description>
      <p>带步骤的进度条。</p>
    </template>
    <template v-slot:demo>
      <div class="example-progress-steps">
        <vui-progress type="steps" v-bind:steps="3" v-bind:percentage="50" />
        <br />
        <vui-progress type="steps" v-bind:steps="5" v-bind:percentage="30" />
        <br />
        <vui-progress type="steps" size="small" v-bind:steps="5" v-bind:percentage="100" strokeColor="#52c41a" />
        <br />
        <vui-progress type="steps" v-bind:steps="5" v-bind:percentage="60" v-bind:strokeColor="['#52c41a', '#52c41a', '#ff4d4f']" />
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