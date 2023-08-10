<template>
  <vui-example id="example-alert-closable" v-bind:code="code">
    <template v-slot:title>可关闭的警告提示</template>
    <template v-slot:description>
      <p>显示关闭按钮，点击可关闭警告提示。</p>
    </template>
    <template v-slot:demo>
      <div class="example-alert-closable">
        <vui-alert type="warning" closable message="Warning" />
        <vui-alert type="error" closable message="Error" description="This is an error message about copywriting." />
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
  .example-alert-closable .vui-alert + .vui-alert { margin-top:16px; }
</style>