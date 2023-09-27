const code =
`<template>
  <div class="example-steps-clickable">
    <vui-steps v-bind:step="step" v-on:change="handleChange">
      <vui-step title="Step 1" description="This is a description." />
      <vui-step title="Step 2" description="This is a description." />
      <vui-step title="Step 3" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." disabled />
    </vui-steps>
    <vui-divider v-bind:gutter="24" />
    <vui-steps direction="vertical" v-bind:step="step" v-on:change="handleChange">
      <vui-step title="Step 1" description="This is a description." />
      <vui-step title="Step 2" description="This is a description." />
      <vui-step title="Step 3" description="This is a description." />
      <vui-step title="Waiting" description="This is a description." disabled />
    </vui-steps>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const step = ref<number>(1);
      const handleChange = (newStep: number) => step.value = newStep;

      return {
        step,
        handleChange
      };
    }
  });
</script>
`;

export default code;