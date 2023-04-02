<template>
  <vui-example id="example-modal-position" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-modal-position">
        <vui-button type="primary" v-on:click="showModal">Open Modal at 160px to top</vui-button>
        <vui-modal
          title="Modal Title"
          v-model:visible="visible"
          v-bind:top="160"
          v-bind:centered="false"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
        </vui-modal>
      </div>
    </template>
    <template v-slot:title>位置</template>
    <template v-slot:description>
      <p>取消默认的垂直居中，并使用 <code>top</code> 属性来设置对话框的打开位置。</p>
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