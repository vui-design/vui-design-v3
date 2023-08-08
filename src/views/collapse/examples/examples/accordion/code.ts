const code =
`<template>
  <vui-collapse v-model:activeKeys="activeKeys" accordion>
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

<script lang="ts">
  import { defineComponent, ref, watch } from "vue";

  export default defineComponent({
    setup() {
      const activeKeys = ref<string>();

      watch(activeKeys, (value: string) => {
        console.log(value);
      });

      return {
        activeKeys
      };
    }
  });
</script>
`;

export default code;