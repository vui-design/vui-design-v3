<template>
  <vui-example id="example-space-divider" v-bind:code="code">
    <template v-slot:title>分割线</template>
    <template v-slot:description>
      <p>相邻标签或组件使用分割线进行分隔。</p>
    </template>
    <template v-slot:demo>
      <div class="example-space-divider">
        <vui-space block divider>
          <a href="javascript:;">Link</a>
          <a href="javascript:;">Link</a>
          <a href="javascript:;">Link</a>
        </vui-space>
        <vui-space block v-bind:divider="54" v-bind:gutter="32">
          <vui-statistic v-bind:value="110888" title="Active Users" />
          <vui-statistic v-bind:value="110888" v-bind:precision="2" title="Account Balance (CNY)" />
          <vui-statistic v-bind:value="88" title="Unmerged">
            <template slot="suffix">/ 100</template>
          </vui-statistic>
        </vui-space>
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
  .example-space-divider .vui-space + .vui-space { margin-top:16px; }
</style>