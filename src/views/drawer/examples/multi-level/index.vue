<template>
  <vui-example id="example-drawer-multi-level" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-drawer-multi-level">
        <vui-button type="primary" v-on:click="showDrawer1">Open First Drawer</vui-button>
        <vui-drawer
          title="First Drawer Title"
          v-model:visible="visible1"
        >
          <vui-button type="primary" v-on:click="showDrawer2">Open Second Drawer</vui-button>
          <vui-drawer
            title="Second Drawer Title"
            v-model:visible="visible2"
          >
            <vui-button type="primary" v-on:click="showDrawer3">Open Third Drawer</vui-button>
            <vui-drawer
              title="Third Drawer Title"
              v-model:visible="visible3"
            >
              <p>This is third drawer</p>
            </vui-drawer>
          </vui-drawer>
        </vui-drawer>
      </div>
    </template>
    <template v-slot:title>多层抽屉</template>
    <template v-slot:description>
      <p>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</p>
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
      const visible1 = ref<boolean>(false);
      const showDrawer1 = () => visible1.value = true;

      const visible2 = ref<boolean>(false);
      const showDrawer2 = () => visible2.value = true;

      const visible3 = ref<boolean>(false);
      const showDrawer3 = () => visible3.value = true;

      return {
        code,
        visible1,
        showDrawer1,
        visible2,
        showDrawer2,
        visible3,
        showDrawer3
      };
    }
  });
</script>