<template>
  <vui-example id="example-backtop-custom" v-bind:code="code">
    <template v-slot:title>自定义样式</template>
    <template v-slot:description>
      <p>可以自定义回到顶部按钮的样式。</p>
    </template>
    <template v-slot:demo>
      <div style="height: 400px;">
        Scroll down to see the bottom-right blue button.
        <vui-backtop v-bind:bottom="100">
          <div class="btn-backtop">TOP</div>
        </vui-backtop>
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
  .btn-backtop { width:40px; height:40px; border-radius:2px; background-color:#2d8cf0; color:#fff; font-size:14px; text-align:center; line-height:40px; }
</style>