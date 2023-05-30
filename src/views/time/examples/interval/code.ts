const code =
`<template>
  <div class="example-time-interval">
    <vui-time v-bind:value="value" v-bind:interval="300" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(new Date().getTime());

      return {
        value
      };
    }
  });
</script>
`;

export default code;