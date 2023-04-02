<template>
  <vui-example id="example-modal-draggable" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-modal-draggable">
        <vui-button type="primary" v-on:click="showModal">Open Draggable Modal</vui-button>
        <vui-modal
          title="Modal Title"
          v-model:visible="visible"
          v-bind:draggable="true"
          v-on:cancel="handleCancel"
          v-on:ok="handleOk"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
        </vui-modal>
      </div>
    </template>
    <template v-slot:title>可拖动</template>
    <template v-slot:description>
      <p>开启 <code>draggable</code> 属性，允许用户拖动对话框；重新打开后将重置为默认位置。</p>
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

      const handleCancel = () => {
        console.log("Clicked cancel");
      };
      const handleOk = () => {
        console.log("Clicked ok");
      };

      return {
        code,
        visible,
        showModal,
        handleCancel,
        handleOk
      };
    }
  });
</script>