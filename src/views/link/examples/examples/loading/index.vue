<template>
  <vui-example id="example-link-loading" v-bind:code="code">
    <template v-slot:title>加载状态</template>
    <template v-slot:description>
      <p>添加 <code>loading</code> 属性即可让文字链接处于加载状态。</p>
    </template>
    <template v-slot:demo>
      <div class="example-link-loading">
        <vui-link type="primary" icon="dustbin" v-bind:loading="deleting" v-on:click="handleDelete">Delete</vui-link>
        <vui-link type="primary" v-bind:loading="loading" v-on:click="handleClick">Click me</vui-link>
        <vui-link type="primary" loading>Loading</vui-link>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const deleting = ref(false);
      const loading = ref(false);

      const handleDelete = () => deleting.value = true;
      const handleClick = () => loading.value = true;

      return {
        code,
        deleting,
        loading,
        handleDelete,
        handleClick
      };
    }
  });
</script>

<style>
  .example-link-loading .vui-link + .vui-link { margin-left:16px; }
</style>