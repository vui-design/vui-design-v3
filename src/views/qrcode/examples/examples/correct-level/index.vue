<template>
  <vui-example id="example-qrcode-correct-level" v-bind:code="code">
    <template v-slot:title>纠错级别</template>
    <template v-slot:description>
      <p>纠错级别，可选值为 <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>，默认为 <code>3</code>，数字越大说明所需纠错级别越大。</p>
    </template>
    <template v-slot:demo>
      <div class="example-qrcode-correct-level">
        <vui-segments v-model:activeKey="correctLevel">
          <vui-segments-item v-bind:key="0">0</vui-segments-item>
          <vui-segments-item v-bind:key="1">1</vui-segments-item>
          <vui-segments-item v-bind:key="2">2</vui-segments-item>
          <vui-segments-item v-bind:key="3">3</vui-segments-item>
        </vui-segments>
        <vui-qrcode
          v-bind:correctLevel="correctLevel"
          value="https://vui-design.github.io/vui-design-doc/"
        />
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
      const correctLevel = ref<number>(3);

      return {
        code,
        correctLevel
      };
    }
  });
</script>

<style>
  .example-qrcode-correct-level .vui-segments + .vui-qrcode { margin-top:16px; }
</style>