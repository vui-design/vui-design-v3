<template>
  <vui-example id="example-collapse-extra" v-bind:code="code">
    <template v-slot:title>附加内容</template>
    <template v-slot:description>
      <p>可以在面板标题的右侧添加附加内容。</p>
    </template>
    <template v-slot:demo>
      <vui-collapse v-model:activeKeys="activeKeys">
        <vui-collapse-panel key="1" title="This is panel header 1" extra="Extra">
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vui-collapse-panel>
        <vui-collapse-panel key="2" title="This is panel header 2">
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          <template v-slot:extra>
            <vui-badge v-bind:count="10" />
          </template>
        </vui-collapse-panel>
        <vui-collapse-panel key="3" title="This is panel header 3">
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
          <template v-slot:extra>
            <vui-button size="small">Extra</vui-button>
          </template>
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