const code =
`<template>
  <div class="example-skeleton-children">
    <vui-skeleton animated v-bind:loading="loading">
      <h4>What is Vue.js?</h4>
      <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.</p>
    </vui-skeleton>
    <vui-button v-bind:disabled="loading" v-on:click="showSkeleton">Show Skeleton</vui-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const loading = ref(false);
      const showSkeleton = () => {
        loading.value = true;
        setTimeout(() => loading.value = false, 3000);
      };

      return {
        loading,
        showSkeleton
      };
    }
  });
</script>

<style>
  .example-skeleton-children h4 { margin:0 0 16px 0; color:#262626; }
  .example-skeleton-children p { margin:0; }
  .example-skeleton-children .vui-button { margin-top:16px; }
</style>
`;

export default code;