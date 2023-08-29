<template>
  <vui-example id="example-steps-navigation" v-bind:code="code">
    <template v-slot:title>导航步骤条</template>
    <template v-slot:description>
      <p>导航类型的步骤条。</p>
    </template>
    <template v-slot:demo>
      <div>
        <vui-steps type="navigation" v-bind:step="1" style="box-shadow: 0 -1px 0 #e6e6e6 inset;">
          <vui-step title="Finished" description="This is a description." />
          <vui-step title="In Progress" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
        </vui-steps>
        <vui-divider v-bind:gutter="32" />
        <vui-steps type="navigation" direction="vertical" v-bind:step="1" style="width: 240px; box-shadow: -1px 0 0 #e6e6e6 inset;">
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