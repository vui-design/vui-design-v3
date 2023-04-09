const code =
`<template>
  <div class="example-input-show-count">
    <vui-input v-model:value="value1" showCount placeholder="Enter something..." />
    <vui-input v-model:value="value2" showCount v-bind:maxLength="10" placeholder="Enter something..." />
    <vui-input v-model:value="value3" showCount v-bind:maxLength="10" v-bind:bytes="getBytes" placeholder="Enter something..." />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value1 = ref<string>("");
      const value2 = ref<string>("");
      const value3 = ref<string>("");

      const getBytes = (value: string) => {
        const chinese = value.match(/[^\\x00-\\xff]/ig);

        return value.length + (chinese === null ? 0 : chinese.length);
      };

      return {
        value1,
        value2,
        value3,
        getBytes
      };
    }
  });
</script>

<style>
  .example-input-show-count .vui-input:not(:first-child) { margin-top:24px; }
</style>
`;

export default code;