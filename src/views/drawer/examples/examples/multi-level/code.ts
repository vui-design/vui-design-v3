const code =
`<template>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const visible1 = ref<boolean>(false);
      const showDrawer1 = () => visible1.value = true;

      const visible2 = ref<boolean>(false);
      const showDrawer2 = () => visible2.value = true;

      const visible3 = ref<boolean>(false);
      const showDrawer3 = () => visible3.value = true;

      return {
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
`;

export default code;