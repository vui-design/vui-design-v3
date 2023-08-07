<template>
  <vui-example id="example-button-size" v-bind:code="code">
    <template v-slot:title>按钮尺寸</template>
    <template v-slot:description>
      <p>按钮有小、中、大三种尺寸。</p>
      <p>通过设置 <code>size</code> 为 <code>small</code> 或 <code>large</code> 以使用小型或大型按钮。若不设置 <code>size</code>，则默认为中型尺寸。</p>
    </template>
    <template v-slot:demo>
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
      const size = ref("medium");

      return {
        code,
        size
      };
    }
  });
</script>

<style>
  .example-button-size section + section { margin-top:16px; }
  .example-button-size .vui-button + .vui-button { margin-left:12px; }
</style>