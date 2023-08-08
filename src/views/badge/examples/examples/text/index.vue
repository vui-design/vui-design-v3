<template>
  <vui-example id="example-badge-text" v-bind:code="code">
    <template v-slot:title>文本徽标</template>
    <template v-slot:description>
      <p>设置 <code>text</code> 属性，自定义显示文本；为空字符串时不会显示。</p>
    </template>
    <template v-slot:demo>
      <div class="example-badge-text">
        <vui-badge text="NEW">
          <img src="https://dummyimage.com/48x48/e6e6e6/6a6a6a" />
        </vui-badge>
        <vui-badge text="HOT">
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
  .example-badge-text .vui-badge + .vui-badge { margin-left:16px; }
  .example-badge-text .vui-badge img { display:block; width:48px; height:48px; border-radius:5px; }
</style>