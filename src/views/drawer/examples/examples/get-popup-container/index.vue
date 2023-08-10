<template>
  <vui-example id="example-drawer-get-popup-container" v-bind:code="code">
    <template v-slot:title>渲染在当前容器</template>
    <template v-slot:description>
      <p>渲染在当前容器里；自定义容器，查看 <code>getPopupContainer</code> 属性。</p>
    </template>
    <template v-slot:demo>
      <div class="example-drawer-get-popup-container">
        <vui-button type="primary" v-on:click="showDrawer">Open</vui-button>
        <vui-drawer
          v-model:visible="visible"
          v-bind:footer="false"
          v-bind:getPopupContainer="null"
          width="50%"
          title="Drawer Title"
        >
          Some contents...
        </vui-drawer>
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
      const visible = ref<boolean>(false);
      const showDrawer = () => visible.value = true;

      return {
        code,
        visible,
        showDrawer
      };
    }
  });
</script>

<style>
  .example-drawer-get-popup-container { position:relative; height:240px; border:1px solid #f0f0f0; background-color:#f6f6f6; padding:48px; overflow:hidden; }
</style>