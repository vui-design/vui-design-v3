<template>
  <vui-example id="example-card-in-column" v-bind:code="code">
    <template v-slot:title>栅格卡片</template>
    <template v-slot:description>
      <p>在系统概览页面常常和栅格进行配合。</p>
    </template>
    <template v-slot:demo>
      <div class="example-card-in-column">
        <vui-row v-bind:gutter="[24, 24]">
          <vui-col v-bind:span="8">
            <vui-card v-bind:bordered="false" title="Card title">
              <p>Card content...</p>
            </vui-card>
          </vui-col>
          <vui-col v-bind:span="8">
            <vui-card v-bind:bordered="false" title="Card title">
              <p>Card content...</p>
            </vui-card>
          </vui-col>
          <vui-col v-bind:span="8">
            <vui-card v-bind:bordered="false" title="Card title">
              <p>Card content...</p>
            </vui-card>
          </vui-col>
          <vui-col v-bind:span="16">
            <vui-card v-bind:bordered="false" title="Card title">
              <p>Card content...</p>
            </vui-card>
          </vui-col>
          <vui-col v-bind:span="8">
            <vui-card v-bind:bordered="false" title="Card title">
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
  .example-card-in-column { background-color:#f6f6f6; padding:24px; }
  .example-card-in-column p { margin:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
</style>