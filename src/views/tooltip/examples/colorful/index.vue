<template>
  <vui-example id="example-tooltip-colorful" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-tooltip-colorful">
        <vui-divider orientation="left">Presets</vui-divider>
        <vui-tooltip color="dark" content="This is a tooltip">
          <vui-button>Dark</vui-button>
        </vui-tooltip>
        <vui-tooltip color="light" content="This is a tooltip">
          <vui-button>Light</vui-button>
        </vui-tooltip>
        <vui-tooltip color="blue" content="This is a tooltip">
          <vui-button>Blue</vui-button>
        </vui-tooltip>
        <vui-tooltip color="cyan" content="This is a tooltip">
          <vui-button>Cyan</vui-button>
        </vui-tooltip>
        <vui-tooltip color="geekblue" content="This is a tooltip">
          <vui-button>Geekblue</vui-button>
        </vui-tooltip>
        <vui-tooltip color="gold" content="This is a tooltip">
          <vui-button>Gold</vui-button>
        </vui-tooltip>
        <vui-tooltip color="green" content="This is a tooltip">
          <vui-button>Green</vui-button>
        </vui-tooltip>
        <vui-tooltip color="lime" content="This is a tooltip">
          <vui-button>Lime</vui-button>
        </vui-tooltip>
        <vui-tooltip color="magenta" content="This is a tooltip">
          <vui-button>Magenta</vui-button>
        </vui-tooltip>
        <vui-tooltip color="orange" content="This is a tooltip">
          <vui-button>Orange</vui-button>
        </vui-tooltip>
        <vui-tooltip color="pink" content="This is a tooltip">
          <vui-button>Pink</vui-button>
        </vui-tooltip>
        <vui-tooltip color="purple" content="This is a tooltip">
          <vui-button>Purple</vui-button>
        </vui-tooltip>
        <vui-tooltip color="red" content="This is a tooltip">
          <vui-button>Red</vui-button>
        </vui-tooltip>
        <vui-tooltip color="volcano" content="This is a tooltip">
          <vui-button>Volcano</vui-button>
        </vui-tooltip>
        <vui-tooltip color="yellow" content="This is a tooltip">
          <vui-button>Yellow</vui-button>
        </vui-tooltip>
      </div>
      <div class="example-tooltip-colorful">
        <vui-divider orientation="left">Custom</vui-divider>
        <vui-tooltip color="#f60" content="This is a tooltip">
          <vui-button>#f60</vui-button>
        </vui-tooltip>
        <vui-tooltip color="#2db7f5" content="This is a tooltip">
          <vui-button>#2db7f5</vui-button>
        </vui-tooltip>
        <vui-tooltip color="#87d068" content="This is a tooltip">
          <vui-button>#87d068</vui-button>
        </vui-tooltip>
        <vui-tooltip color="#108ee9" content="This is a tooltip">
          <vui-button>#108ee9</vui-button>
        </vui-tooltip>
      </div>
    </template>
    <template v-slot:title>多彩文字提示</template>
    <template v-slot:description>
      <p>多种预设颜色，用作不同场景。如果预设值不能满足你的需求，可以设置为具体的颜色值。</p>
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
  .example-tooltip-colorful + .example-tooltip-colorful { margin-top:24px; }
  .example-tooltip-colorful .vui-divider { margin-top:0; }
  .example-tooltip-colorful .vui-button { margin-right:12px; margin-bottom:12px; }
</style>