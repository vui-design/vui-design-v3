<template>
  <vui-example id="example-drawer-button-props" v-bind:code="code">
    <template v-slot:title>按钮属性</template>
    <template v-slot:description>
      <p>使用 <code>cancelText</code> 和 <code>okText</code> 属性设置按钮的显示文字。</p>
      <p>设置 <code>cancelButtonProps</code> 和 <code>okButtonProps</code> 可分别定义取消按钮和确定按钮的属性，详见 <router-link to="/components/button">Button</router-link> 组件。</p>
    </template>
    <template v-slot:demo>
      <div class="example-drawer-button-props">
        <vui-button type="primary" v-on:click="showDrawer">Open Drawer with customized button props</vui-button>
        <vui-drawer
          title="Drawer Title"
          cancelText="Cancel"
          okText="Delete"
          v-model:visible="visible"
          v-bind:cancelButtonProps="{ type: 'text' }"
          v-bind:okButtonProps="{ type: 'danger' }"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
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