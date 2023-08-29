const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref<string>("medium");

      return {
        size
      };
    }
  });
</script>
`;

export default code;