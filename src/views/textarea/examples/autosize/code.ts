const code =
`<template>
  <div class="example-textarea-autosize">
    <vui-textarea
      v-model:value="value1"
      autosize
      placeholder="Autosize height based on content lines"
    />
    <vui-textarea
      v-model:value="value2"
      v-bind:autosize="autosize"
      placeholder="Autosize height with minimum and maximum number of lines"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from "vue";

  interface Autosize {
    minRows?: string | number;
    maxRows?: string | number
  };

  export default defineComponent({
    setup() {
      const value1 = ref<string>("");
      const value2 = ref<string>("");
      const autosize = reactive<Autosize>({ minRows: 2, maxRows: 8 });

      return {
        value1,
        value2,
        autosize
      };
    }
  });
</script>

<style>
  .example-textarea-autosize .vui-textarea + .vui-textarea { margin-top:24px; }
</style>
`;

export default code;