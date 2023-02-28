<template>
  <vui-example id="example-card-no-border" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-card-no-border">
        <vui-card v-bind:bordered="false" title="Card title">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
        </vui-card>
      </div>
    </template>
    <template v-slot:title>无外边框</template>
    <template v-slot:description>
      <p>建议在灰色背景的容器中使用无外边框的卡片。</p>
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
  .example-card-no-border { background-color:#f6f6f6; padding:24px; }
  .example-card-no-border p { margin:0; }
  .example-card-no-border p + p { margin-top:8px; }
</style>