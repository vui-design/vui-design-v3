<template>
  <vui-example id="example-steps-error" v-bind:code="code">
    <template v-slot:title>步骤运行错误</template>
    <template v-slot:description>
      <p>使用 <code>Steps</code> 的 <code>status</code> 属性来指定当前步骤的状态。</p>
    </template>
    <template v-slot:demo>
      <vui-steps v-bind:step="1" status="error">
        <vui-step title="Finished" description="This is a description." />
        <vui-step title="In Progress" description="This is a description." />
        <vui-step title="Waiting" description="This is a description." />
        <vui-step title="Waiting" description="This is a description." />
      </vui-steps>
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