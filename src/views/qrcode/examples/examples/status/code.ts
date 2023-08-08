const code = `
<template>
  <div class="example-qrcode-status">
    <vui-qrcode value="https://vui-design.github.io/vui-design-doc/" status="loading" />
    <vui-qrcode value="https://vui-design.github.io/vui-design-doc/" status="expired" v-on:refresh="handleRefresh" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      const handleRefresh = () => console.log("refresh");

      return {
        handleRefresh
      };
    }
  });
</script>

<style>
  .example-qrcode-status { display:flex; justify-content:flex-start; align-items:flex-start; }
  .example-qrcode-status .vui-qrcode + .vui-qrcode { margin-left:24px; }
</style>
`;

export default code;