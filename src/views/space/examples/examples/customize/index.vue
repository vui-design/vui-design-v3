<template>
  <vui-example id="example-space-customize" v-bind:code="code">
    <template v-slot:title>自定义间距</template>
    <template v-slot:description>
      <p>间距大小支持自定义为具体的像素值。</p>
    </template>
    <template v-slot:demo>
      <div class="example-space-customize">
        <section>
          <vui-space divider v-bind:gutter="24">
            <a href="javascript:;">Link</a>
            <a href="javascript:;">Link</a>
            <a href="javascript:;">Link</a>
          </vui-space>
        </section>
        <section>
          <vui-space v-bind:gutter="40">
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

<style>
  .example-space-customize section { margin-top:32px; }
</style>