<template>
  <vui-example id="example-qrcode-status" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-qrcode-status">
        <vui-qrcode value="https://vui-design.github.io/vui-design-doc/" status="loading" />
        <vui-qrcode value="https://vui-design.github.io/vui-design-doc/" status="expired" v-on:refresh="handleRefresh" />
      </div>
    </template>
    <template v-slot:title>不同的状态</template>
    <template v-slot:description>
      <p>可以通过 <code>status</code> 属性制二维码的状态。</p>
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
      const handleRefresh = () => console.log("refresh");

      return {
        code,
        handleRefresh
      };
    }
  });
</script>

<style>
  .example-qrcode-status { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-qrcode-status .vui-qrcode + .vui-qrcode { margin-left:24px; }
</style>