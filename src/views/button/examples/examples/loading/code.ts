const code =
`<template>
  <div class="example-button-loading">
    <section>
      <vui-button type="primary" icon="dustbin" v-bind:loading="loading1" v-on:click="handleClick1">Click me</vui-button>
      <vui-button type="primary" v-bind:loading="loading2" v-on:click="handleClick2">Click me</vui-button>
      <vui-button type="primary" loading>Loading...</vui-button>
    </section>
    <section>
      <vui-button type="primary" shape="circle" loading />
      <vui-button shape="circle" loading />
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const loading1 = ref(false);
      const loading2 = ref(false);

      const handleClick1 = () => loading1.value = true;
      const handleClick2 = () => loading2.value = true;

      return {
        loading1,
        loading2,
        handleClick1,
        handleClick2
      };
    }
  });
</script>

<style>
  .example-button-loading section + section { margin-top:16px; }
  .example-button-loading .vui-button { margin-right:16px; }
</style>
`;

export default code;