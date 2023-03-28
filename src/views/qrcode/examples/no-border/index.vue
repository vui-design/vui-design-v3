<template>
  <vui-example id="example-qrcode-no-border" v-bind:code="code">
    <template v-slot:demo>
      <vui-qrcode
        v-bind:bordered="false"
        v-bind:size="134"
        value="https://vui-design.github.io/vui-design-doc/"
      />
    </template>
    <template v-slot:title>无边框</template>
    <template v-slot:description>
      <p>没有边框的二维码。</p>
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