const code = `
<template>
  <vui-qrcode
    value="https://developer.mozilla.org/zh-CN/docs/Glossary/HTML5"
    v-bind:image="image"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import image from "../../../../assets/images/html5.png";

  export default defineComponent({
    setup() {
      return {
        image
      };
    }
  });
</script>
`;

export default code;