const code =
`<template>
  <div class="example-button-size">
    <vui-segments v-model:activeKey="size">
      <vui-segments-item key="small">Small</vui-segments-item>
      <vui-segments-item key="medium">Medium</vui-segments-item>
      <vui-segments-item key="large">Large</vui-segments-item>
    </vui-segments>
    <vui-space block>
      <vui-button type="primary" v-bind:size="size">Primary</vui-button>
      <vui-button v-bind:size="size">Default</vui-button>
      <vui-button type="dashed" v-bind:size="size">Dashed</vui-button>
      <vui-button type="text" v-bind:size="size">Text</vui-button>
    </vui-space>
    <vui-space block>
      <vui-button type="primary" icon="download-package" v-bind:size="size">Download</vui-button>
      <vui-button type="primary" icon="download-package" shape="round" v-bind:size="size">Download</vui-button>
      <vui-button type="primary" icon="download-package" shape="circle" v-bind:size="size" />
    </vui-space>
    <vui-space block>
      <vui-button-group type="primary" v-bind:size="size">
        <vui-button>
          <vui-icon type="chevron-left" />Backward
        </vui-button>
        <vui-button>
          Forward<vui-icon type="chevron-right" />
        </vui-button>
      </vui-button-group>
    </vui-space>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const size = ref("medium");

      return {
        size
      };
    }
  });
</script>

<style>
  .example-button-size .vui-space { margin-top:16px; }
  .example-button-size .vui-segments + .vui-space { margin-top:24px; }
</style>
`;

export default code;