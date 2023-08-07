<template>
  <vui-example id="example-grid-responsive-more" v-bind:code="code">
    <template v-slot:title>其它属性的响应式</template>
    <template v-slot:description>
      <p><code>span</code>、<code>offset</code>、<code>push</code>、<code>pull</code>、<code>order</code> 属性可以通过内嵌到 <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> 属性中来使用。</p>
      <p>其中 <code>xs="6"</code> 相当于 <code>xs="{ span: 6 }"</code>。</p>
    </template>
    <template v-slot:demo>
      <div class="example-grid-responsive-more">
        <vui-row>
          <vui-col v-bind:xs="{ span: 5, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
          <vui-col v-bind:xs="{ span: 11, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
          <vui-col v-bind:xs="{ span: 5, offset: 1 }" v-bind:lg="{ span: 6, offset: 2 }"><div>Col</div></vui-col>
        </vui-row>
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
  .example-grid-responsive-more .vui-row { background-color:#f6f6f6; }
  .example-grid-responsive-more .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-responsive-more .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-responsive-more .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>