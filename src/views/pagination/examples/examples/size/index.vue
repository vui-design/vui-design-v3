<template>
  <vui-example id="example-pagination-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>提供三种尺寸：大、中（默认）、小。</p>
    </template>
    <template v-slot:demo>
      <div class="example-pagination-size">
        <vui-segments v-model:activeKey="size">
          <vui-segments-item key="small">Small</vui-segments-item>
          <vui-segments-item key="medium">Medium</vui-segments-item>
          <vui-segments-item key="large">Large</vui-segments-item>
        </vui-segments>
        <vui-pagination simple v-bind:size="size" v-bind:total="100" />
        <vui-pagination simple v-bind:size="size" v-bind:total="100" showPageSizer showPageJumper />
        <vui-pagination simple v-bind:size="size" v-bind:total="100" showTotal />
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

<style>
  .example-pagination-size .vui-segments + .vui-pagination { margin-top:32px; }
  .example-pagination-size .vui-pagination + .vui-pagination { margin-top:24px; }
</style>