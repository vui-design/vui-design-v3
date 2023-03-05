<template>
  <vui-example id="example-alert-close-text" v-bind:code="code">
    <template v-slot:demo>
      <vui-alert type="success" closable closeText="Close" message="Success" />
    </template>
    <template v-slot:title>自定义关闭按钮</template>
    <template v-slot:description>
      <p>允许自定义关闭按钮，自定义的文本会替换默认的关闭图标。</p>
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