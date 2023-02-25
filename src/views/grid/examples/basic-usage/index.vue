<template>
  <vui-example id="example-grid-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-grid-basic-usage">
        <vui-row>
          <vui-col v-bind:span="24"><div>col-24</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="12"><div>col-12</div></vui-col>
          <vui-col v-bind:span="12"><div>col-12</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
          <vui-col v-bind:span="8"><div>col-8</div></vui-col>
        </vui-row>
        <vui-row>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
          <vui-col v-bind:span="6"><div>col-6</div></vui-col>
        </vui-row>
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列 <code>Col</code> 必须放在 <code>Row</code> 内。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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
  .example-grid-basic-usage .vui-row + .vui-row { margin-top:16px; }
  .example-grid-basic-usage .vui-row .vui-col div { height:48px; color:#fff; text-align:center; line-height:48px; }
  .example-grid-basic-usage .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-basic-usage .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>