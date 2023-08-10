<template>
  <vui-example id="example-drawer-customized-footer" v-bind:code="code">
    <template v-slot:title>自定义页脚</template>
    <template v-slot:description>
      <p>利用 <code>footer</code> 插槽自定义抽屉底部内容；点击提交后进入 <code>loading</code> 状态，完成后关闭。</p>
    </template>
    <template v-slot:demo>
      <div class="example-drawer-customized-footer">
        <vui-button type="primary" v-on:click="showDrawer">Open Drawer with customized footer</vui-button>
        <vui-drawer
          title="Drawer Title"
          v-model:visible="visible"
        >
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
          <template v-slot:footer>
            <vui-button v-on:click="handleCancel">Cancel</vui-button>
            <vui-button type="primary" v-bind:loading="loading" v-on:click="handleSubmit">Submit</vui-button>
          </template>
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
      const loading = ref<boolean>(false);

      const showDrawer = () => visible.value = true;
      const handleCancel = () => visible.value = false;
      const handleSubmit = () => {
        loading.value = true;

        setTimeout(() => {
          visible.value = false;
          loading.value = false;
        }, 1500);
      };

      return {
        code,
        visible,
        loading,
        showDrawer,
        handleCancel,
        handleSubmit
      };
    }
  });
</script>