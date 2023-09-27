<template>
  <vui-example id="example-steps-dot" v-bind:code="code">
    <template v-slot:title>点状步骤条</template>
    <template v-slot:description>
      <p>包含步骤点的进度条。</p>
    </template>
    <template v-slot:demo>
      <div>
        <vui-steps type="dot" v-bind:step="1">
          <vui-step title="Finished" description="This is a description." />
          <vui-step title="In Progress" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
        </vui-steps>
        <vui-divider v-bind:gutter="24" />
        <vui-steps type="dot" direction="vertical" v-bind:step="1">
          <vui-step title="Finished" description="This is a description." />
          <vui-step title="In Progress" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
        </vui-steps>
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