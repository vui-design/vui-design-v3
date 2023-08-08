<template>
  <vui-example id="example-list-simple" v-bind:code="code">
    <template v-slot:title>简单列表</template>
    <template v-slot:description>
      <p>列表拥有大、中、小三种尺寸，默认为中型尺寸。</p>
      <p>可通过 <code>header</code>、<code>footer</code> 属性或插槽来自定义列表头部和尾部内容。</p>
    </template>
    <template v-slot:demo>
      <div class="example-list-simple">
        <vui-list bordered size="small" header="Header" footer="Footer">
          <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
          <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
          <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
          <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
        </vui-list>
        <vui-list bordered header="Header" footer="Footer">
          <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
          <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
          <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
          <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
        </vui-list>
        <vui-list bordered size="large" header="Header" footer="Footer">
          <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
          <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
          <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
          <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
        </vui-list>
      </div>
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

<style>
  .example-list-simple .vui-list + .vui-list { margin-top:24px; }
</style>