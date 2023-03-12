<template>
  <vui-example id="example-anchor-click" v-bind:code="code">
    <template v-slot:demo>
      <vui-anchor v-bind:affix="false" preventDefault v-on:click="handleClick">
        <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
        <vui-anchor-link href="#example-anchor-static" title="Static" />
        <vui-anchor-link href="#example-api" title="API">
          <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
          <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
          <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
        </vui-anchor-link>
      </vui-anchor>
    </template>
    <template v-slot:title>自定义 onClick 事件</template>
    <template v-slot:description>
      <p>通过在 <code>onClick</code> 事件中禁止点击链接的默认行为，以使点击锚点时不记录历史。</p>
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
      const handleClick = (e: MouseEvent, link) => {
        console.log(link);
      };

      return {
        code,
        handleClick
      };
    }
  });
</script>