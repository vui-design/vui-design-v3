<template>
  <vui-example id="example-alert-type" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-alert-type">
        <vui-alert message="Information" />
        <vui-alert type="warning" message="Warning" />
        <vui-alert type="success" message="Success" />
        <vui-alert type="error" message="Error" />
      </div>
    </template>
    <template v-slot:title>四种类型</template>
    <template v-slot:description>
      <p>共有 <code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 四种类型可以选择，默认为 <code>info</code> 类型。</p>
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

<style>
  .example-alert-type .vui-alert + .vui-alert { margin-top:16px; }
</style>