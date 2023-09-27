<template>
  <vui-example id="example-space-align" v-bind:code="code">
    <template v-slot:title>交叉轴对齐方式</template>
    <template v-slot:description>
      <p>横向布局时，设置项目在交叉轴上的对齐方式。</p>
    </template>
    <template v-slot:demo>
      <div class="example-space-align">
        <div class="example-space-align-block">
          <vui-space align="start">
            start
            <vui-button type="primary">Primary</vui-button>
            <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
          </vui-space>
        </div>
        <div class="example-space-align-block">
          <vui-space align="center">
            center
            <vui-button type="primary">Primary</vui-button>
            <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
          </vui-space>
        </div>
        <div class="example-space-align-block">
          <vui-space align="end">
            end
            <vui-button type="primary">Primary</vui-button>
            <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
          </vui-space>
        </div>
        <div class="example-space-align-block">
          <vui-space align="baseline">
            baseline
            <vui-button type="primary">Primary</vui-button>
            <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
          </vui-space>
        </div>
        <div class="example-space-align-block">
          <vui-space align="stretch">
            stretch
            <vui-button type="primary">Primary</vui-button>
            <div style="background-color: rgba(150, 150, 150, 0.2); padding: 24px 16px;">Block</div>
          </vui-space>
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
  .example-space-align { display:inline-flex; flex-direction:column; }
  .example-space-align-block { border:1px solid #f0f0f0; padding:16px; }
  .example-space-align-block + .example-space-align-block { margin-top:24px; }
</style>