<template>
  <vui-example id="example-breadcrumb-icon" v-bind:code="code">
    <template v-slot:demo>
      <vui-breadcrumb>
        <vui-breadcrumb-item icon="home">Home</vui-breadcrumb-item>
        <vui-breadcrumb-item icon="stack">Components</vui-breadcrumb-item>
        <vui-breadcrumb-item icon="links">Navigation</vui-breadcrumb-item>
        <vui-breadcrumb-item>Breadcrumb</vui-breadcrumb-item>
      </vui-breadcrumb>
    </template>
    <template v-slot:title>带图标的</template>
    <template v-slot:description>
      <p>可自定义每项的内容，比如带有一个图标。</p>
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