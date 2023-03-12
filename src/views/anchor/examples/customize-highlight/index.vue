<template>
  <vui-example id="example-anchor-customize-highlight" v-bind:code="code">
    <template v-slot:demo>
      <vui-anchor v-bind:affix="false" v-bind:getCurrentAnchorLink="getCurrentAnchorLink">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
    <template v-slot:title>自定义锚点高亮</template>
    <template v-slot:description>
      <p>自定义锚点高亮。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const getCurrentAnchorLink = () => "#example-anchor-static";

      return {
        code,
        getCurrentAnchorLink
      };
    }
  });
</script>