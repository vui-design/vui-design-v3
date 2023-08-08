<template>
  <vui-example id="example-card-simple" v-bind:code="code">
    <template v-slot:title>简洁卡片</template>
    <template v-slot:description>
      <p>只包含内容区域。</p>
    </template>
    <template v-slot:demo>
      <div class="example-card-simple">
        <vui-card style="width: 360px;">
          <p>Card content...</p>
          <p>Card content...</p>
          <p>Card content...</p>
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
  .example-card-simple p { margin:0; }
  .example-card-simple p + p { margin-top:8px; }
</style>