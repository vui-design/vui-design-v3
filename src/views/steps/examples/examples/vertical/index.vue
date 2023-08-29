<template>
  <vui-example id="example-steps-vertical" v-bind:code="code">
    <template v-slot:title>纵向步骤条</template>
    <template v-slot:description>
      <p>设置 <code>direction</code> 属性为 <code>vertical</code> 启用纵向步骤条。</p>
    </template>
    <template v-slot:demo>
      <vui-steps direction="vertical" v-bind:step="1">
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