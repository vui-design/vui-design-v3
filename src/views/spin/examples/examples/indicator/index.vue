<template>
  <vui-example id="example-spin-indicator" v-bind:code="code">
    <template v-slot:title>自定义指示符</template>
    <template v-slot:description>
      <p>使用自定义指示符。</p>
    </template>
    <template v-slot:demo>
      <div class="example-spin-indicator">
        <vui-spin>
          <template v-slot:indicator>
            <vui-icon type="loading-filled" style="font-size: 24px" />
          </template>
        </vui-spin>
        <vui-spin v-bind:indicator="indicator" />
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";
  import { Icon } from "vui-design";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const indicator = () => {
        return h(Icon, {
          type: "loading-spinner",
          style: {
            fontSize: "24px"
          }
        });
      };

      return {
        code,
        indicator
      };
    }
  });
</script>

<style>
  .example-spin-indicator .vui-spin + .vui-spin { margin-left:24px; }
</style>