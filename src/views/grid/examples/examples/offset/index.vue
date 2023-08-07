<template>
  <vui-example id="example-grid-offset" v-bind:code="code">
    <template v-slot:title>左右偏移</template>
    <template v-slot:description>
      <p>使用 <code>offset</code> 可以将列向右侧偏；例如 <code>offset="4"</code> 将元素向右侧偏移了 <code>4</code> 个列的宽度。</p>
    </template>
    <template v-slot:demo>
      <div class="example-grid-offset">
        <vui-row>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
          <vui-col v-bind:span="8" v-bind:offset="8"><div>col-8 | col-offset-8</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="6" v-bind:offset="6"><div>col-6 | col-offset-6</div></vui-col>
          <vui-col v-bind:span="6" v-bind:offset="6"><div>col-6 | col-offset-6</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="12" v-bind:offset="6"><div>col-12 | col-offset-6</div></vui-col>
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
  .example-grid-offset .vui-row { background-color:#f6f6f6; }
  .example-grid-offset .vui-row + .vui-row { margin-top:16px; }
  .example-grid-offset .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-offset .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-offset .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>