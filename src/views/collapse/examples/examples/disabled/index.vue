<template>
  <vui-example id="example-collapse-disabled" v-bind:code="code">
    <template v-slot:title>禁用</template>
    <template v-slot:description>
      <p>禁用后的面板展开与否将无法通过用户交互改变。</p>
    </template>
    <template v-slot:demo>
      <vui-collapse v-model:activeKeys="activeKeys">
        <vui-collapse-panel key="1" title="This is panel header 1">
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vui-collapse-panel>
        <vui-collapse-panel key="2" title="This is panel header 2" disabled>
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vui-collapse-panel>
        <vui-collapse-panel key="3" title="This is panel header 3" disabled>
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vui-collapse-panel>
      </vui-collapse>
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

      return {
        code,
        activeKeys
      };
    }
  });
</script>