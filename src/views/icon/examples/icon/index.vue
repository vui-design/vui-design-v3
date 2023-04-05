<template>
  <highlightjs language="xml" v-bind:code="code" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import code from "./code";

  export default defineComponent({
    setup() {
      return {
        code
      };
    }
  });
</script>