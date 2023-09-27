const code =
`<template>
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