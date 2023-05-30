const code =
`<template>
  <div class="example-time-type">
    <vui-time v-bind:value="value" />
    <br />
    <vui-time type="date" v-bind:value="value" />
    <br />
    <vui-time type="datetime" v-bind:value="value" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<number>(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);

      return {
        value
      };
    }
  });
</script>
`;

export default code;