<template>
  <vui-example id="example-watermark-image" v-bind:code="code">
    <template v-slot:title>图片水印</template>
    <template v-slot:description>
      <p>通过 <code>image</code> 指定图片地址；为保证图片高清且不被拉伸，建议设置 <code>width</code> 和 <code>height</code>，并上传至少两倍于宽高的图片。</p>
    </template>
    <template v-slot:demo>
      <vui-watermark
        v-bind:width="120"
        v-bind:height="24"
        v-bind:image="logo"
      >
        <div style="height: 480px;"></div>
      </vui-watermark>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";
  import logo from "../../../../../assets/images/logo.png";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code,
        logo
      };
    }
  });
</script>