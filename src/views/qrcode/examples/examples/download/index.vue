<template>
  <vui-example id="example-qrcode-download" v-bind:code="code">
    <template v-slot:title>下载</template>
    <template v-slot:description>
      <p>利用 <code>download</code> 方法下载二维码。</p>
    </template>
    <template v-slot:demo>
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
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const qrcodeRef = ref();
      const handleDownload = () => {
        if (!qrcodeRef.value) {
          return;
        }

        qrcodeRef.value.download("QRCode.png");
      };

      return {
        code,
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