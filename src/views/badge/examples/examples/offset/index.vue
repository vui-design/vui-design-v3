<template>
  <vui-example id="example-badge-offset" v-bind:code="code">
    <template v-slot:title>自定义位置偏移</template>
    <template v-slot:description>
      <p>自定义位置偏移，格式为 <code>[top, left]</code>，表示徽标距默认位置上方及左侧的偏移量。</p>
    </template>
    <template v-slot:demo>
      <div class="example-badge-offset">
        <vui-badge v-bind:count="10" v-bind:offset="[5, -5]">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
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
  .example-badge-offset .vui-badge img { display:block; width:48px; height:48px; border-radius:5px; }
</style>