<template>
  <vui-example id="example-tooltip-content" v-bind:code="code">
    <template v-slot:demo>
      <vui-tooltip style="max-width: 240px;">
        <span>Customized content</span>
        <template v-slot:content>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.</template>
      </vui-tooltip>
    </template>
    <template v-slot:title>自定义内容</template>
    <template v-slot:description>
      <p>通过 <code>content</code> 插槽自定义更丰富的内容。</p>
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
      return {
        code
      };
    }
  });
</script>