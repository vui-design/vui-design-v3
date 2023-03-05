const code =
`<template>
  <div class="example-spin-indicator">
    <vui-spin>
      <template v-slot:indicator>
        <vui-icon type="loading-filled" style="font-size: 24px" />
      </template>
    </vui-spin>
    <vui-spin v-bind:indicator="indicator" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, h } from "vue";
  import { Icon } from "vui-design";

  export default defineComponent({
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
        indicator
      };
    }
  });
</script>

<style>
  .example-spin-indicator .vui-spin + .vui-spin { margin-left:24px; }
</style>
`;

export default code;