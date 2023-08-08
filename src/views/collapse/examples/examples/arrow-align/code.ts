const code =
`<template>
  <div class="example-collapse-arrow-align">
    <vui-radio-group type="button" v-model:value="arrowAlign">
      <vui-radio value="left" label="Left" />
      <vui-radio value="right" label="Right" />
    </vui-radio-group>
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

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const activeKeys = ref<string[]>([]);
      const arrowAlign = ref<string>("left");

      return {
        activeKeys,
        arrowAlign
      };
    }
  });
</script>

<style>
  .example-collapse-arrow-align > .vui-collapse { margin-top:24px; }
</style>
`;

export default code;