<template>
  <vui-example id="example-grid-sort" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-grid-sort">
        <vui-row>
          <vui-col v-bind:span="18" v-bind:push="6"><div>col-18 | col-push-6</div></vui-col>
          <vui-col v-bind:span="6" v-bind:pull="18"><div>col-6 | col-pull-18</div></vui-col>
        </vui-row>
      </div>
    </template>
    <template v-slot:title>栅格排序</template>
    <template v-slot:description>
      <p>通过使用 <code>push</code> 和 <code>pull</code> 属性可以很容易的改变列的顺序。</p>
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
  .example-grid-sort .vui-row .vui-col div { height:48px; overflow:hidden; color:#fff; text-align:center; line-height:48px; }
  .example-grid-sort .vui-row .vui-col:nth-child(odd) div { background-color:rgba(45,140,240,0.7); }
  .example-grid-sort .vui-row .vui-col:nth-child(even) div { background-color:rgba(45,140,240,1); }
</style>