<template>
  <vui-example id="example-link-icon" v-bind:code="code">
    <template v-slot:title>图标</template>
    <template v-slot:description>
      <p>带图标的文字链接可增强辨识度。</p>
    </template>
    <template v-slot:demo>
      <div class="example-link-icon">
        <vui-link icon="edit">Edit</vui-link>
        <vui-link>
          <vui-icon type="dustbin" />Delete
        </vui-link>
        <vui-link>
          More<vui-icon type="chevron-down" />
        </vui-link>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>

<style>
  .example-link-icon .vui-link + .vui-link { margin-left:16px; }
</style>