<template>
  <vui-example id="example-badge-status" v-bind:code="code">
    <template v-slot:title>状态点</template>
    <template v-slot:description>
      <p>用于表示状态的小圆点。</p>
    </template>
    <template v-slot:demo>
      <div class="example-badge-status">
        <vui-badge status="default" />
        <vui-badge status="processing" />
        <vui-badge status="warning" />
        <vui-badge status="success" />
        <vui-badge status="error" />
        <br />
        <vui-badge status="default" text="Default" />
        <br />
        <vui-badge status="processing" text="Processing" />
        <br />
        <vui-badge status="warning" text="Warning" />
        <br />
        <vui-badge status="success" text="Success" />
        <br />
        <vui-badge status="error" text="Error" />
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
  .example-badge-status .vui-badge + .vui-badge { margin-left:16px; }
</style>