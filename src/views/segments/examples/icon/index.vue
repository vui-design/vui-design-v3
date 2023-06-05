<template>
  <vui-example id="example-segments-icon" v-bind:code="code">
    <template v-slot:demo>
      <vui-space direction="vertical">
        <vui-segments>
          <vui-segments-item key="list" icon="menu-unfold" />
          <vui-segments-item key="weekly" icon="grid" />
        </vui-segments>
        <vui-segments>
          <vui-segments-item key="list" icon="menu-unfold">List</vui-segments-item>
          <vui-segments-item key="weekly" icon="grid">Kanban</vui-segments-item>
        </vui-segments>
      </vui-space>
    </template>
    <template v-slot:title>图标</template>
    <template v-slot:description>
      <p>含有图标的分段控制器。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>