const code =
`<template>
  <div class="example-rate-text">
    <vui-rate v-model:value="value" v-bind:tooltips="tooltips" />
    <span>{{tooltips[value - 1]}}</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(3);
      const tooltips = ref<string[]>(["terrible", "bad", "normal", "good", "wonderful"]);

      return {
        value,
        tooltips
      };
    }
  });
</script>

<style>
  .example-rate-text { display:flex; justify-content:flex-start; align-items:center; line-height:1; }
  .example-rate-text span { margin-left:16px; }
</style>
`;

export default code;