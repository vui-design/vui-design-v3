<template>
  <vui-example id="example-collapse-nested" v-bind:code="code">
    <template v-slot:title>嵌套面板</template>
    <template v-slot:description>
      <p>折叠面板可以进行嵌套。</p>
    </template>
    <template v-slot:demo>
      <vui-collapse>
        <vui-collapse-panel key="1" title="This is panel header 1">
          <vui-collapse accordion>
            <vui-collapse-panel key="1-1" title="This is panel header 1-1">
              <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </vui-collapse-panel>
            <vui-collapse-panel key="1-2" title="This is panel header 1-2">
              <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </vui-collapse-panel>
          </vui-collapse>
        </vui-collapse-panel>
        <vui-collapse-panel key="2" title="This is panel header 2">
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vui-collapse-panel>
        <vui-collapse-panel key="3" title="This is panel header 3">
          <p style="margin: 0;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vui-collapse-panel>
      </vui-collapse>
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