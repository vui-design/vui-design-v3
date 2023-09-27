<template>
  <vui-example id="example-space-justify" v-bind:code="code">
    <template v-slot:title>主轴对齐方式</template>
    <template v-slot:description>
      <p>横向布局时，设置项目在主轴上的对齐方式。</p>
    </template>
    <template v-slot:demo>
      <div class="example-space-justify">
        <div class="example-space-justify-block">
          <vui-space block justify="start">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="center">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="end">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="around">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
        <div class="example-space-justify-block">
          <vui-space block justify="between">
            <vui-button>Default</vui-button>
            <vui-button type="primary">Primary</vui-button>
          </vui-space>
        </div>
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
  .example-space-justify-block { border:1px solid #f0f0f0; padding:16px; }
  .example-space-justify-block + .example-space-justify-block { margin-top:24px; }
</style>