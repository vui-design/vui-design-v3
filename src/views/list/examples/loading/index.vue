<template>
  <vui-example id="example-list-loading" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-list-loading">
        <div class="example-list-loading-title">
          <label>Loading State:</label>
          <vui-switch type="line" v-model:checked="loading" />
        </div>
        <vui-list bordered v-bind:loading="loading" header="Header" footer="Footer">
          <vui-list-item>Racing car sprays burning fuel into crowd.</vui-list-item>
          <vui-list-item>Japanese princess to wed commoner.</vui-list-item>
          <vui-list-item>Australian walks 100km after outback crash.</vui-list-item>
          <vui-list-item>Man charged over missing wedding girl.</vui-list-item>
        </vui-list>
      </div>
    </template>
    <template v-slot:title>加载中</template>
    <template v-slot:description>
      <p>标记列表内容正在加载当中。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const loading = ref<boolean>(true);

      return {
        code,
        loading
      };
    }
  });
</script>

<style>
  .example-list-loading-title { display:flex; justify-content:flex-start; align-items:center; margin-bottom:16px; }
  .example-list-loading-title label { margin-right:8px;; }
</style>