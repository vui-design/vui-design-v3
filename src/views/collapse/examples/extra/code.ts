const code =
`<template>
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
        <vui-button size="small" v-on:click.stop>Extra</vui-button>
      </template>
    </vui-collapse-panel>
  </vui-collapse>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const activeKeys = ref<string[]>([]);

      return {
        activeKeys
      };
    }
  });
</script>
`;

export default code;