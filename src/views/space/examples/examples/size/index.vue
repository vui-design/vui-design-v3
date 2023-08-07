<template>
  <vui-example id="example-space-gutter" v-bind:code="code">
    <template v-slot:title>间距大小</template>
    <template v-slot:description>
      <p>间距预设小、中、大三种大小，默认为中等间距。</p>
    </template>
    <template v-slot:demo>
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
  .example-space-gutter section { margin-top:32px; }
</style>