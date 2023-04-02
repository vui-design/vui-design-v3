const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const visible = ref<boolean>(false);
      const showDrawer = () => visible.value = true;

      return {
        visible,
        showDrawer
      };
    }
  });
</script>

<style>
  .example-drawer-get-popup-container { position:relative; height:240px; border:1px solid #f0f0f0; background-color:#f6f6f6; padding:48px; overflow:hidden; }
</style>
`;

export default code;