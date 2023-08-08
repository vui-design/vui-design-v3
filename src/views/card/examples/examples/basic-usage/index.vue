<template>
  <vui-example id="example-card-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>自定义图标、标题、主体和附加内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
    </template>
    <template v-slot:demo>
      <div class="example-card-basic-usage">
        <vui-card icon="menu-unfold" style="width: 360px;" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
          <template v-slot:extra>
            <a href="javascript:;">More</a>
          </template>
        </vui-card>
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
  .example-card-basic-usage p { margin:0; }
  .example-card-basic-usage p + p { margin-top:8px; }
</style>