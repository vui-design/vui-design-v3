<template>
  <vui-example id="example-collapse-arrow-align" v-bind:code="code">
    <template v-slot:title>箭头位置</template>
    <template v-slot:description>
      <p>通过 <code>arrowAlign</code> 属性可以改变箭头图标的位置。</p>
    </template>
    <template v-slot:demo>
      <div class="example-collapse-arrow-align">
        <vui-segments v-model:activeKey="arrowAlign">
          <vui-segments-item key="left">Left</vui-segments-item>
          <vui-segments-item key="right">Right</vui-segments-item>
        </vui-segments>
        <vui-collapse v-model:activeKeys="activeKeys" v-bind:arrowAlign="arrowAlign">
          <vui-collapse-panel key="1" title="This is panel header 1">
            <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          </vui-collapse-panel>
          <vui-collapse-panel key="2" title="This is panel header 2">
            <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          </vui-collapse-panel>
          <vui-collapse-panel key="3" title="This is panel header 3">
            <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          </vui-collapse-panel>
        </vui-collapse>
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
      const activeKeys = ref<string[]>([]);
      const arrowAlign = ref<string>("left");

      return {
        code,
        activeKeys,
        arrowAlign
      };
    }
  });
</script>

<style>
  .example-collapse-arrow-align .vui-segments + .vui-collapse { margin-top:16px; }
</style>