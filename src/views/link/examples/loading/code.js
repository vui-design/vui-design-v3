const code =
`<template>
  <div class="example-link-loading">
    <vui-link type="primary" icon="dustbin" v-bind:loading="deleting" v-on:click="handleDelete">Delete</vui-link>
    <vui-link type="primary" v-bind:loading="loading" v-on:click="handleClick">Click me</vui-link>
    <vui-link type="primary" loading>Loading</vui-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const deleting = ref(false);
      const loading = ref(false);

      const handleDelete = () => deleting.value = true;
      const handleClick = () => loading.value = true;

      return {
        deleting,
        loading,
        handleDelete,
        handleClick
      };
    }
  });
</script>

<style>
  .example-link-loading .vui-link + .vui-link { margin-left:16px; }
</style>
`;

export default code;