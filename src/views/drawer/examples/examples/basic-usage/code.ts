const code =
`<template>
  <div class="example-drawer-basic-usage">
    <vui-button type="primary" v-on:click="showDrawer">Open Drawer</vui-button>
    <vui-drawer
      title="Drawer Title"
      v-model:visible="visible"
      v-on:cancel="handleCancel"
      v-on:ok="handleOk"
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
      const showDrawer = () => visible.value = true;

      const handleCancel = () => {
        console.log("Clicked cancel");
      };
      const handleOk = () => {
        console.log("Clicked ok");
      };

      return {
        visible,
        showDrawer,
        handleCancel,
        handleOk
      };
    }
  });
</script>
`;

export default code;