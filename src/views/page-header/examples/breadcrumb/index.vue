<template>
  <vui-example id="example-page-header-breadcrumb" v-bind:code="code">
    <template v-slot:demo>
      <vui-page-header
        style="border: 1px solid #f0f0f0;"
        title="Title"
        subTitle="This is a subtitle"
      >
        <template v-slot:breadcrumb>
          <vui-breadcrumb>
            <vui-breadcrumb-item>Home</vui-breadcrumb-item>
            <vui-breadcrumb-item>Components</vui-breadcrumb-item>
            <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
            <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
          </vui-breadcrumb>
        </template>
      </vui-page-header>
    </template>
    <template v-slot:title>含面包屑</template>
    <template v-slot:description>
      <p>含面包屑的页头，适合层级比较深的页面，让用户可以快速导航。</p>
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