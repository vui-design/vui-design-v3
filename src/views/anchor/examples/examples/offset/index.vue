<template>
  <vui-example id="example-anchor-offset" v-bind:code="code">
    <template v-slot:title>滚动偏移量</template>
    <template v-slot:description>
      <p>设置锚点目标滚动到屏幕正中间。</p>
    </template>
    <template v-slot:demo>
      <vui-anchor v-bind:offset="offset">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const offset = ref<number>();

      onMounted(() => {
        offset.value = window.innerHeight / 2;
      });

      return {
        code,
        offset
      };
    }
  });
</script>