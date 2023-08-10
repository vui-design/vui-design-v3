<template>
  <vui-example id="example-alert-banner" v-bind:code="code">
    <template v-slot:title>顶部公告</template>
    <template v-slot:description>
      <p>设置 <code>banner</code> 属性可以应用顶部公告样式。</p>
    </template>
    <template v-slot:demo>
      <vui-browser>
        <div class="example-alert-banner">
          <vui-alert type="warning" showIcon banner message="Warning" />
          <vui-alert type="warning" showIcon banner closable message="Detailed description and advice about warning copywriting." />
          <vui-alert type="success" banner message="Success without icon" />
          <vui-alert type="error" showIcon banner message="This is an error message about copywriting." />
        </div>
      </vui-browser>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import VuiBrowser from "../../../../../components/browser/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample,
      VuiBrowser
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-alert-banner .vui-alert + .vui-alert { margin-top:16px; }
</style>