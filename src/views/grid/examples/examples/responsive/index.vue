<template>
  <vui-example id="example-grid-responsive" v-bind:code="code">
    <template v-slot:title>响应式布局</template>
    <template v-slot:description>
      <p>参照 Bootstrap 的<a href="http://getbootstrap.com/css/#grid-media-queries" target="_blank">响应式设计</a>，预设六个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code>。</p>
    </template>
    <template v-slot:demo>
      <div class="example-grid-responsive">
        <vui-row>
          <vui-col v-bind:xs="2" v-bind:sm="4" v-bind:md="6" v-bind:lg="8" v-bind:xl="10"><div>Col</div></vui-col>
          <vui-col v-bind:xs="20" v-bind:sm="16" v-bind:md="12" v-bind:lg="8" v-bind:xl="4"><div>Col</div></vui-col>
          <vui-col v-bind:xs="2" v-bind:sm="4" v-bind:md="6" v-bind:lg="8" v-bind:xl="10"><div>Col</div></vui-col>
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
  .example-grid-responsive .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-responsive .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-responsive .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>