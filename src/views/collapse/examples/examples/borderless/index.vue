<template>
  <vui-example id="example-collapse-borderless" v-bind:code="code">
    <template v-slot:title>无外边框</template>
    <template v-slot:description>
      <p>一套无外边框的简洁样式。</p>
    </template>
    <template v-slot:demo>
      <vui-collapse v-model:activeKeys="activeKeys" v-bind:bordered="false">
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
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const activeKeys = ref<string[]>([]);

      watch(activeKeys, (value: string[]) => {
        console.log(value);
      });

      return {
        code,
        activeKeys
      };
    }
  });
</script>