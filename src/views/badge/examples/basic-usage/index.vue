<template>
  <vui-example id="example-badge-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-badge-basic-usage">
        <vui-badge v-bind:count="10">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge v-bind:count="0">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
      </div>
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>简单的徽标展示；当 <code>count</code> 为 <code>0</code> 时，不会显示。</p>
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
  .example-badge-basic-usage .vui-badge + .vui-badge { margin-left:16px; }
  .example-badge-basic-usage .vui-badge img { display:block; width:48px; height:48px; border-radius:5px; }
</style>