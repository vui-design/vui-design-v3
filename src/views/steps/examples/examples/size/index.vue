<template>
  <vui-example id="example-steps-size" v-bind:code="code">
    <template v-slot:title>步骤条尺寸</template>
    <template v-slot:description>
      <p>不同尺寸的步骤条。</p>
    </template>
    <template v-slot:demo>
      <div>
        <vui-segments v-model:activeKey="size">
          <vui-segments-item key="small">Small</vui-segments-item>
          <vui-segments-item key="medium">Medium</vui-segments-item>
          <vui-segments-item key="large">Large</vui-segments-item>
        </vui-segments>
        <vui-divider v-bind:gutter="24" />
        <vui-steps v-bind:size="size" v-bind:step="1">
          <vui-step title="Finished" description="This is a description." />
          <vui-step title="In Progress" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
        </vui-steps>
        <vui-divider v-bind:gutter="24" />
        <vui-steps direction="vertical" v-bind:size="size" v-bind:step="1">
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
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const size = ref<string>("medium");

      return {
        code,
        size
      };
    }
  });
</script>