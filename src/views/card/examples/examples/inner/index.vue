<template>
  <vui-example id="example-card-inner" v-bind:code="code">
    <template v-slot:title>内部卡片</template>
    <template v-slot:description>
      <p>可以放在普通卡片内部，展示多层级结构的信息。</p>
    </template>
    <template v-slot:demo>
      <div class="example-card-inner">
        <vui-card title="Card title">
          <vui-card title="Inner card title">
            <p>Inner card content...</p>
            <template v-slot:extra>
              <a href="javascript:;">More</a>
            </template>
          </vui-card>
          <vui-card style="margin-top: 20px;" title="Inner card title">
            <p>Inner card content...</p>
            <template v-slot:extra>
              <a href="javascript:;">More</a>
            </template>
          </vui-card>
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
  .example-card-inner p { margin:0; }
</style>