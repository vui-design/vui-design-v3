<template>
  <vui-example id="example-modal-hide-close-button" v-bind:code="code">
    <template v-slot:title>隐藏关闭按钮</template>
    <template v-slot:description>
      <p>将属性 <code>closable</code> 设置为 <code>false</code>，可以隐藏对话框右上角的关闭按钮。</p>
    </template>
    <template v-slot:demo>
      <div class="example-modal-hide-close-button">
        <vui-button type="primary" v-on:click="showModal">Hide Close Button</vui-button>
        <vui-modal
          title="Modal Title"
          v-model:visible="visible"
          v-bind:closable="false"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
        </vui-modal>
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
      const showModal = () => visible.value = true;

      return {
        code,
        visible,
        showModal
      };
    }
  });
</script>