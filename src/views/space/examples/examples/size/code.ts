const code =
`<template>
  <div class="example-space-gutter">
    <vui-radio-group v-model:value="gutter">
      <vui-radio label="Small" value="small" />
      <vui-radio label="Medium" value="medium" />
      <vui-radio label="Large" value="large" />
    </vui-radio-group>
    <section>
      <vui-space divider v-bind:gutter="gutter">
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
        <a href="javascript:;">Link</a>
      </vui-space>
    </section>
    <section>
      <vui-space v-bind:gutter="gutter">
        <vui-button type="primary">Primary</vui-button>
        <vui-button>Default</vui-button>
        <vui-button type="dashed">Dashed</vui-button>
        <vui-button type="text">Text</vui-button>
      </vui-space>
    </section>
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
  .example-space-gutter section { margin-top:32px; }
</style>
`;

export default code;