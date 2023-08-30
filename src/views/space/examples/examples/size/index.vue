<template>
  <vui-example id="example-space-gutter" v-bind:code="code">
    <template v-slot:title>间距大小</template>
    <template v-slot:description>
      <p>间距预设小、中、大三种大小，默认为中等间距。</p>
    </template>
    <template v-slot:demo>
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
      const gutter = ref<string>("medium");

      return {
        code,
        gutter
      };
    }
  });
</script>

<style>
  .example-space-gutter .vui-space { margin-top:16px; }
  .example-space-gutter .vui-segments + .vui-space { margin-top:32px; }
</style>