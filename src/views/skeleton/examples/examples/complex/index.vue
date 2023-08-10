<template>
  <vui-example id="example-skeleton-complex" v-bind:code="code">
    <template v-slot:title>复杂的组合</template>
    <template v-slot:description>
      <p>更复杂的组合。</p>
    </template>
    <template v-slot:demo>
      <vui-skeleton avatar v-bind:paragraph="{ rows: 4 }" />
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