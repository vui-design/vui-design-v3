<template>
  <vui-example id="example-qrcode-image" v-bind:code="code">
    <template v-slot:demo>
      <vui-qrcode
        value="https://developer.mozilla.org/zh-CN/docs/Glossary/HTML5"
        v-bind:image="image"
        v-bind:imageSize="40"
      />
    </template>
    <template v-slot:title>图片</template>
    <template v-slot:description>
      <p>为二维码添加 Logo 图片。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";
  import image from "../../../../assets/images/html5.png";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code,
        image
      };
    }
  });
</script>