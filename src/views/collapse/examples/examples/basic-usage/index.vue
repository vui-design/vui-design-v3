<template>
  <vui-example id="example-collapse-basic-usage" v-bind:code="code">
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>可以同时展开多个面板，这个例子默认展开了第一个。</p>
    </template>
    <template v-slot:demo>
      <vui-collapse v-model:activeKeys="activeKeys">
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
      const activeKeys = ref<string[]>(["1"]);

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