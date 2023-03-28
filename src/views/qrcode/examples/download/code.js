const code = `
<template>
  <div class="example-qrcode-download">
    <vui-qrcode ref="qrcodeRef" value="https://vui-design.github.io/vui-design-doc/" />
    <vui-button
      type="dashed"
      icon="download"
      block
      v-on:click="handleDownload"
    >
      下载二维码
    </vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const qrcodeRef = ref();
      const handleDownload = () => {
        if (!qrcodeRef.value) {
          return;
        }

        qrcodeRef.value.download("QRCode.png");
      };

      return {
        qrcodeRef,
        handleDownload
      };
    }
  });
</script>

<style>
  .example-qrcode-download { width:160px; }
  .example-qrcode-download .vui-button { margin-top:16px; }
</style>
`;

export default code;