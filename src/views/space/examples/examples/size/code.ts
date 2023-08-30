const code =
`<template>
  <div class="example-space-gutter">
    <vui-segments v-model:activeKey="gutter">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <vui-space block divider v-bind:gutter="gutter">
      <a href="javascript:;">Link</a>
      <a href="javascript:;">Link</a>
      <a href="javascript:;">Link</a>
    </vui-space>
    <vui-space block v-bind:gutter="gutter">
      <vui-button type="primary">Primary</vui-button>
      <vui-button>Default</vui-button>
      <vui-button type="dashed">Dashed</vui-button>
      <vui-button type="text">Text</vui-button>
    </vui-space>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const gutter = ref<string>("medium");

      return {
        gutter
      };
    }
  });
</script>

<style>
  .example-space-gutter .vui-space { margin-top:16px; }
  .example-space-gutter .vui-segments + .vui-space { margin-top:32px; }
</style>
`;

export default code;