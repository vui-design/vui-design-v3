<template>
  <highlightjs v-bind:language='language' v-bind:code='code' />
</template>

<script>
  export default {
    props: {
      language: {
        type: String,
        default: "html"
      },
      code: {
        type: String,
        default: ""
      }
    }
  };
</script>