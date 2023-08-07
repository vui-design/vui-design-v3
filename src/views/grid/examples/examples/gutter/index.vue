<template>
  <vui-example id="example-grid-gutter" v-bind:code="code">
    <template v-slot:title>区块间隔</template>
    <template v-slot:description>
      <p>栅格常常需要和间隔进行配合，你可以使用 <code>Row</code> 的 <code>gutter</code> 属性，推荐使用 <code>(16+8n)px</code> 作为栅格间隔，其中 <code>n</code> 是自然数。</p>
      <p>如果要支持响应式，可以写成 <code>{ xs: 8, sm: 16, md: 24, lg: 32 }</code>。</p>
      <p>如果需要垂直间距，可以写成数组形式 <code>[水平间距, 垂直间距]</code> <code>[16, { xs: 8, sm: 16, md: 24, lg: 32 }]</code>。</p>
    </template>
    <template v-slot:demo>
      <div>
        <div class="example-grid-gutter">
          <vui-divider orientation="left">Horizontal</vui-divider>
          <vui-row v-bind:gutter="16">
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-gutter">
          <vui-divider orientation="left">Vertical</vui-divider>
          <vui-row v-bind:gutter="[16, 16]">
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-gutter">
          <vui-divider orientation="left">Responsive</vui-divider>
          <vui-row v-bind:gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
            <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          </vui-row>
        </div>
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
  .example-grid-gutter + .example-grid-gutter { margin-top:32px; }
  .example-grid-gutter .vui-divider { margin-top:0; }
  .example-grid-gutter .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-gutter .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-gutter .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>