<template>
  <vui-example id="example-tooltip-trigger" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-tooltip-trigger">
        <vui-tooltip trigger="hover" content="This is a tooltip">
          <vui-button>Hover</vui-button>
        </vui-tooltip>
        <vui-tooltip trigger="focus" content="This is a tooltip">
          <vui-button>Focus</vui-button>
        </vui-tooltip>
        <vui-tooltip trigger="click" content="This is a tooltip">
          <vui-button>Click</vui-button>
        </vui-tooltip>
        <vui-tooltip trigger="contextmenu" content="This is a tooltip">
          <vui-button>Contextmenu</vui-button>
        </vui-tooltip>
      </div>
    </template>
    <template v-slot:title>触发方式</template>
    <template v-slot:description>
      <p>包含鼠标移入、聚焦、点击和鼠标右击 <code>4</code> 种触发方式。</p>
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

<style>
  .example-tooltip-trigger .vui-button + .vui-button { margin-left:12px; }
</style>