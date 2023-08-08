const code =
`<template>
  <div class="example-input-number-formatter">
    <vui-input-number v-model:value="value1" v-bind:min="0" v-bind:formatter="formatter1" />
    <vui-input-number v-model:value="value2" v-bind:min="50" v-bind:max="100" v-bind:formatter="formatter2" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value1 = ref<number>(1010);
      const value2 = ref<number>(60);

      const formatter1 = (value: number) => ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const formatter2 = (value: number) => value + "%";

      return {
        value1,
        value2,
        formatter1,
        formatter2
      };
    }
  });
</script>

<style>
  .example-input-number-formatter .vui-input-number + .vui-input-number { margin-left:16px; }
</style>
`;

export default code;