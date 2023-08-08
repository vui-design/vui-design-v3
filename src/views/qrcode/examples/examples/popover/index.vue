<template>
  <vui-example id="example-qrcode-popover" v-bind:code="code">
    <template v-slot:title>高级用法</template>
    <template v-slot:description>
      <p>利用气泡卡片展示二维码。</p>
    </template>
    <template v-slot:demo>
      <vui-popover contentStyle="padding: 12px;">
        <img src="https://www.runoob.com/wp-content/uploads/2017/01/vue.png" width="80" height="80" alt="Vue.js" />
        <template v-slot:content>
          <vui-qrcode v-bind:bordered="false" v-bind:size="134" value="https://cn.vuejs.org/" />
        </template>
      </vui-popover>
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