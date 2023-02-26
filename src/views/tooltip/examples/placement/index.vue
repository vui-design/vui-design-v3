<template>
  <vui-example id="example-tooltip-placement" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-tooltip-placement">
        <div class="top">
          <vui-tooltip placement="top-left" content="This is a tooltip">
            <vui-button>TL</vui-button>
          </vui-tooltip>
          <vui-tooltip placement="top" content="This is a tooltip">
            <vui-button>T</vui-button>
          </vui-tooltip>
          <vui-tooltip placement="top-right" content="This is a tooltip">
            <vui-button>TR</vui-button>
          </vui-tooltip>
        </div>
        <div class="middle">
          <div class="middle-left">
            <vui-tooltip placement="left-top" content="This is a tooltip">
              <vui-button block>LT</vui-button>
            </vui-tooltip>
            <vui-tooltip placement="left" content="This is a tooltip">
              <vui-button block>L</vui-button>
            </vui-tooltip>
            <vui-tooltip placement="left-bottom" content="This is a tooltip">
              <vui-button block>LB</vui-button>
            </vui-tooltip>
          </div>
          <div class="middle-right">
            <vui-tooltip placement="right-top" content="This is a tooltip">
              <vui-button block>RT</vui-button>
            </vui-tooltip>
            <vui-tooltip placement="right" content="This is a tooltip">
              <vui-button block>R</vui-button>
            </vui-tooltip>
            <vui-tooltip placement="right-bottom" content="This is a tooltip">
              <vui-button block>RB</vui-button>
            </vui-tooltip>
          </div>
        </div>
        <div class="bottom">
          <vui-tooltip placement="bottom-left" content="This is a tooltip">
            <vui-button>BL</vui-button>
          </vui-tooltip>
          <vui-tooltip placement="bottom" content="This is a tooltip">
            <vui-button>B</vui-button>
          </vui-tooltip>
          <vui-tooltip placement="bottom-right" content="This is a tooltip">
            <vui-button>BR</vui-button>
          </vui-tooltip>
        </div>
      </div>
    </template>
    <template v-slot:title>位置</template>
    <template v-slot:description>
      <p>位置有 <code>12</code> 个方向。</p>
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
  .example-tooltip-placement .top { text-align:center; }
  .example-tooltip-placement .top .vui-button { width:60px; }
  .example-tooltip-placement .top .vui-button + .vui-button { margin-left:12px; }

  .example-tooltip-placement .middle { width:324px; height:126px; margin:12px auto; }
  .example-tooltip-placement .middle-left { float:left; width:60px; }
  .example-tooltip-placement .middle-left .vui-button { width:60px; }
  .example-tooltip-placement .middle-left .vui-button + .vui-button { margin-top:12px; }
  .example-tooltip-placement .middle-right { float:right; width:60px; }
  .example-tooltip-placement .middle-right .vui-button { width:60px; }
  .example-tooltip-placement .middle-right .vui-button + .vui-button { margin-top:12px; }

  .example-tooltip-placement .bottom { text-align:center; }
  .example-tooltip-placement .bottom .vui-button { width:60px; }
  .example-tooltip-placement .bottom .vui-button + .vui-button { margin-left:12px; }
</style>