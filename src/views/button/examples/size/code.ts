const code =
`<template>
  <div class="example-button-size">
    <section>
      <vui-radio-group type="button" v-model:value="size">
        <vui-radio label="Small" value="small" />
        <vui-radio label="Medium" value="medium" />
        <vui-radio label="Large" value="large" />
      </vui-radio-group>
    </section>
    <section>
      <vui-button type="primary" v-bind:size="size">Primary</vui-button>
      <vui-button v-bind:size="size">Default</vui-button>
      <vui-button type="dashed" v-bind:size="size">Dashed</vui-button>
      <vui-button type="text" v-bind:size="size">Text</vui-button>
    </section>
    <section>
      <vui-button type="primary" icon="download-package" v-bind:size="size">Download</vui-button>
      <vui-button type="primary" icon="download-package" shape="round" v-bind:size="size">Download</vui-button>
      <vui-button type="primary" icon="download-package" shape="circle" v-bind:size="size" />
    </section>
    <section>
      <vui-button-group type="primary" v-bind:size="size">
        <vui-button>
          <vui-icon type="chevron-left" />Backward
        </vui-button>
        <vui-button>
          Forward<vui-icon type="chevron-right" />
        </vui-button>
      </vui-button-group>
    </section>
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
  .example-button-size section + section { margin-top:16px; }
  .example-button-size .vui-button + .vui-button { margin-left:12px; }
</style>
`;

export default code;