<template>
  <highlightjs language="xml" v-bind:code="code" />
</template>

<script>
  import code from "./code";

  export default {
    data() {
      return {
        code
      };
    }
  };
</script>