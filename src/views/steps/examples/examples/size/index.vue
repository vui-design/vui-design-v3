<template>
  <vui-example id="example-steps-size" v-bind:code="code">
    <template v-slot:title>步骤条尺寸</template>
    <template v-slot:description>
      <p>不同尺寸的步骤条。</p>
    </template>
    <template v-slot:demo>
      <div>
        <vui-radio-group type="button" v-model:value="size">
          <vui-radio value="small" label="Small" />
          <vui-radio value="medium" label="Medium" />
          <vui-radio value="large" label="Large" />
        </vui-radio-group>
        <vui-divider v-bind:gutter="32" />
        <vui-steps v-bind:size="size" v-bind:step="1">
          <vui-step title="Finished" description="This is a description." />
          <vui-step title="In Progress" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
          <vui-step title="Waiting" description="This is a description." />
        </vui-steps>
        <vui-divider v-bind:gutter="32" />
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