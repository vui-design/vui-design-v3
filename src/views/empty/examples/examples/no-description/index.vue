<template>
  <vui-example id="example-empty-no-description" v-bind:code="code">
    <template v-slot:title>无描述</template>
    <template v-slot:description>
      <p>无描述的空状态。</p>
    </template>
    <template v-slot:demo>
      <vui-empty v-bind:description="false" />
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