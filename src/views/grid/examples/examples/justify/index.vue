<template>
  <vui-example id="example-grid-justify" v-bind:code="code">
    <template v-slot:title>排版</template>
    <template v-slot:description>
      <p>子元素根据不同的值 <code>start</code>、<code>center</code>、<code>end</code>、<code>space-around</code>、<code>space-between</code>，分别定义其在父节点里面的排版方式。</p>
    </template>
    <template v-slot:demo>
      <div>
        <div class="example-grid-justify">
          <vui-divider orientation="left">start</vui-divider>
          <vui-row justify="start">
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-justify">
          <vui-divider orientation="left">center</vui-divider>
          <vui-row justify="center">
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-justify">
          <vui-divider orientation="left">end</vui-divider>
          <vui-row justify="end">
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-justify">
          <vui-divider orientation="left">space-around</vui-divider>
          <vui-row justify="space-around">
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
          </vui-row>
        </div>
        <div class="example-grid-justify">
          <vui-divider orientation="left">space-between</vui-divider>
          <vui-row justify="space-between">
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
            <vui-col v-bind:span="4"><div>col-4</div></vui-col>
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
  .example-grid-justify + .example-grid-justify { margin-top:24px; }
  .example-grid-justify .vui-divider { margin-top:0; }
  .example-grid-justify .vui-row { background-color:#f6f6f6; }
  .example-grid-justify .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-justify .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-justify .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>