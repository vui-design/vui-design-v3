<template>
  <vui-example id="example-modal-width" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-modal-width">
        <vui-button type="primary" v-on:click="showModal">Open Modal of 360px width</vui-button>
        <vui-modal
          title="Modal Title"
          v-model:visible="visible"
          v-bind:width="360"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
        </vui-modal>
      </div>
    </template>
    <template v-slot:title>宽度</template>
    <template v-slot:description>
      <p>设置对话框的宽度为 <code>360px</code>。</p>
      <p>对话框的宽度是响应式的。当屏幕宽度小于 <code>768px</code> 时，宽度会被强制设为 <code>auto</code>。</p>
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