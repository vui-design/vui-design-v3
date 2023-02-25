<template>
  <vui-example id="example-popover-trigger" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-popover-trigger">
        <vui-popover title="Title" content="This is a popover.">
          <vui-button>Hover</vui-button>
        </vui-popover>
        <vui-popover trigger="focus" title="Title" content="This is a popover.">
          <vui-button>Focus</vui-button>
        </vui-popover>
        <vui-popover trigger="click" title="Title" content="This is a popover.">
          <vui-button>Click</vui-button>
        </vui-popover>
        <vui-popover trigger="contextmenu" title="Title" content="This is a popover.">
          <vui-button>Contextmenu</vui-button>
        </vui-popover>
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
  import VuiExample from "src/components/example";
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
  .example-popover-trigger .vui-button + .vui-button { margin-left:16px; }
</style>