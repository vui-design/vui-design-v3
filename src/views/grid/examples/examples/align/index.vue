<template>
  <vui-example id="example-grid-align" v-bind:code="code">
    <template v-slot:title>对齐</template>
    <template v-slot:description>
      <p>子元素垂直对齐。</p>
    </template>
    <template v-slot:demo>
      <div>
        <div class="example-grid-align">
          <vui-divider orientation="left">top</vui-divider>
          <vui-row justify="center" align="top">
            <vui-col v-bind:span="4"><div style="height: 100px; line-height: 100px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 60px; line-height: 60px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 140px; line-height: 140px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 80px; line-height: 80px;">col-4</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-align">
          <vui-divider orientation="left">middle</vui-divider>
          <vui-row justify="space-around" align="middle">
            <vui-col v-bind:span="4"><div style="height: 100px; line-height: 100px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 60px; line-height: 60px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 140px; line-height: 140px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 80px; line-height: 80px;">col-4</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-align">
          <vui-divider orientation="left">bottom</vui-divider>
          <vui-row justify="space-between" align="bottom">
            <vui-col v-bind:span="4"><div style="height: 100px; line-height: 100px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 60px; line-height: 60px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 140px; line-height: 140px;">col-4</div></vui-col>
            <vui-col v-bind:span="4"><div style="height: 80px; line-height: 80px;">col-4</div></vui-col>
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
  .example-grid-align + .example-grid-align { margin-top:24px; }
  .example-grid-align .vui-divider { margin-top:0; }
  .example-grid-align .vui-row { background-color:#f6f6f6; }
  .example-grid-align .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-align .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-align .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>