<template>
  <vui-example id="example-card-shadow" v-bind:code="code">
    <template v-slot:title>卡片阴影</template>
    <template v-slot:description>
      <p>卡片阴影效果，<code>hover</code> 表示鼠标移入时显示阴影，<code>always</code> 表示始终显示阴影。</p>
    </template>
    <template v-slot:demo>
      <div class="example-card-shadow">
        <vui-row v-bind:gutter="24">
          <vui-col v-bind:span="12">
            <vui-card v-bind:bordered="false" shadow="hover" title="Card title">
              <p>Card content...</p>
              <p>Card content...</p>
              <p>Card content...</p>
            </vui-card>
          </vui-col>
          <vui-col v-bind:span="12">
            <vui-card v-bind:bordered="false" shadow="always" title="Card title">
              <p>Card content...</p>
              <p>Card content...</p>
              <p>Card content...</p>
            </vui-card>
          </vui-col>
        </vui-row>
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
  .example-card-shadow { background-color:#f6f6f6; padding:24px; }
  .example-card-shadow p { margin:0; }
  .example-card-shadow p + p { margin-top:8px; }
</style>