<template>
  <vui-example id="example-badge-colorful" v-bind:code="code">
    <template v-slot:title>多彩徽标</template>
    <template v-slot:description>
      <p>多种预设颜色的徽标样式，用作不同场景使用；如果预设值不能满足你的需求，可以设置为具体的颜色值。</p>
    </template>
    <template v-slot:demo>
      <div class="example-badge-colorful">
        <vui-divider orientation="left">Presets</vui-divider>
        <vui-badge color="blue" text="blue" />
        <vui-badge color="cyan" text="cyan" />
        <vui-badge color="geekblue" text="geekblue" />
        <vui-badge color="gold" text="gold" />
        <vui-badge color="green" text="green" />
        <vui-badge color="lime" text="lime" />
        <vui-badge color="magenta" text="magenta" />
        <vui-badge color="orange" text="orange" />
        <vui-badge color="pink" text="pink" />
        <vui-badge color="purple" text="purple" />
        <vui-badge color="red" text="red" />
        <vui-badge color="volcano" text="volcano" />
        <vui-badge color="yellow" text="yellow" />
      </div>
      <div class="example-badge-colorful">
        <vui-divider orientation="left">Custom</vui-divider>
        <vui-badge color="#f60" text="#f60" />
        <vui-badge color="#2db7f5" text="#2db7f5" />
        <vui-badge color="#87d068" text="#87d068" />
        <vui-badge color="#108ee9" text="#108ee9" />
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
  .example-badge-colorful + .example-badge-colorful { margin-top:24px; }
  .example-badge-colorful .vui-divider { margin-top:0; }
  .example-badge-colorful .vui-badge { display:block; }
  .example-badge-colorful .vui-badge + .vui-badge { margin-top:12px; }
</style>