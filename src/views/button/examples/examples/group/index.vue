<template>
  <vui-example id="example-button-group" v-bind:code="code">
    <template v-slot:title>按钮组合</template>
    <template v-slot:description>
      <p>可以将多个 <code>Button</code> 放入 <code>ButtonGroup</code> 容器中，实现按钮组合。</p>
      <p>通过 <code>shape</code> 属性设置按钮组合的形状，<code>size</code> 属性用于设置尺寸。</p>
    </template>
    <template v-slot:demo>
      <div>
        <div class="example-button-group">
          <vui-divider orientation="left">Basic</vui-divider>
          <vui-button-group type="primary">
            <vui-button>Cancel</vui-button>
            <vui-button>OK</vui-button>
          </vui-button-group>
          <vui-button-group disabled>
            <vui-button>Cancel</vui-button>
            <vui-button>OK</vui-button>
          </vui-button-group>
          <vui-button-group>
            <vui-button>Cancel</vui-button>
            <vui-button>OK</vui-button>
          </vui-button-group>
        </div>
        <div class="example-button-group">
          <vui-divider orientation="left">Shape And Icon</vui-divider>
          <vui-button-group type="primary">
            <vui-button>
              <vui-icon type="chevron-left" />Backward
            </vui-button>
            <vui-button>
              Forward<vui-icon type="chevron-right" />
            </vui-button>
          </vui-button-group>
          <vui-button-group type="primary" shape="round">
            <vui-button icon="chevron-left" />
            <vui-button icon="chevron-right" />
          </vui-button-group>
          <vui-button-group shape="round">
            <vui-button icon="chevron-left" />
            <vui-button icon="chevron-right" />
          </vui-button-group>
        </div>
        <div class="example-button-group">
          <vui-divider orientation="left">Size</vui-divider>
          <vui-button-group size="small">
            <vui-button>L</vui-button>
            <vui-button>M</vui-button>
            <vui-button>R</vui-button>
          </vui-button-group>
          <br />
          <br />
          <vui-button-group>
            <vui-button>L</vui-button>
            <vui-button>M</vui-button>
            <vui-button>R</vui-button>
          </vui-button-group>
          <br />
          <br />
          <vui-button-group size="large">
            <vui-button>L</vui-button>
            <vui-button>M</vui-button>
            <vui-button>R</vui-button>
          </vui-button-group>
        </div>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
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
  .example-button-group { line-height:1; }
  .example-button-group + .example-button-group { margin-top:24px; }
  .example-button-group .vui-divider { margin-top:0; }
  .example-button-group .vui-button-group + .vui-button-group { margin-left:12px; }
</style>