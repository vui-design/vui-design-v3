const code =
`<template>
  <div class="example-drawer-placement">
    <vui-radio-group type="button" v-model:value="placement">
      <vui-radio value="top">Top</vui-radio>
      <vui-radio value="bottom">Bottom</vui-radio>
      <vui-radio value="left">Left</vui-radio>
      <vui-radio value="right">Right</vui-radio>
    </vui-radio-group>
    <vui-button type="primary" v-on:click="showDrawer">Open</vui-button>
    <vui-drawer
      title="Drawer Title"
      v-model:visible="visible"
      v-bind:placement="placement"
    >
      <h4>What is Vue?</h4>
      <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
    </vui-drawer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const visible = ref<boolean>(false);
      const placement = ref<string>("top");
      const showDrawer = () => visible.value = true;

      return {
        visible,
        placement,
        showDrawer
      };
    }
  });
</script>

<style>
  .example-drawer-placement .vui-radio-group + .vui-button { margin-left:16px; }
</style>
`;

export default code;