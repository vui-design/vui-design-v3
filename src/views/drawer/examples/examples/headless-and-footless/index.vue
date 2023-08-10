<template>
  <vui-example id="example-drawer-headless-and-footless" v-bind:code="code">
    <template v-slot:title>隐藏页头页脚</template>
    <template v-slot:description>
      <p>未设置 <code>title</code> 标题时，头部将自动隐藏。</p>
      <p>显式的将 <code>footer</code> 设为 <code>false</code> ，可以隐藏抽屉的底部内容。</p>
    </template>
    <template v-slot:demo>
      <div class="example-drawer-headless-and-footless">
        <vui-space>
          <vui-button type="primary" v-on:click="showDrawer1">No Header</vui-button>
          <vui-button type="primary" v-on:click="showDrawer2">No Footer</vui-button>
        </vui-space>
        <vui-drawer v-model:visible="visible1">
          <h4>What is Vue?</h4>
          <p style="margin: 0;">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
        </vui-drawer>
        <vui-drawer
          title="Drawer Title"
          v-model:visible="visible2"
          v-bind:footer="false"
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
      const visible1 = ref<boolean>(false);
      const visible2 = ref<boolean>(false);

      const showDrawer1 = () => visible1.value = true;
      const showDrawer2 = () => visible2.value = true;

      return {
        code,
        visible1,
        visible2,
        showDrawer1,
        showDrawer2
      };
    }
  });
</script>