const code =
`<template>
  <vui-anchor v-bind:affix="false" v-on:change="handleChange">
    <vui-anchor-link href="#example-anchor-basic-usage" title="Basic Usage" />
    <vui-anchor-link href="#example-anchor-static" title="Static" />
    <vui-anchor-link href="#example-api" title="API">
      <vui-anchor-link href="#example-api-anchor-props" title="Anchor Props" />
      <vui-anchor-link href="#example-api-anchor-events" title="Anchor Events" />
      <vui-anchor-link href="#example-api-anchor-link-props" title="Anchor Link Props" />
    </vui-anchor-link>
  </vui-anchor>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const handleChange = (newHref, oldHref) => {
        console.log("newHref:", newHref, "oldHref:", oldHref);
      };

      return {
        handleChange
      };
    }
  });
</script>
`;

export default code;