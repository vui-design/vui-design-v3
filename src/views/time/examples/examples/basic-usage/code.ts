const code =
`<template>
  <div class="example-time-basic-usage">
    <vui-time v-bind:value="value1" />
    <br />
    <vui-time v-bind:value="value2" />
    <br />
    <vui-time v-bind:value="value3" />
    <br />
    <vui-time v-bind:value="value4" />
    <br />
    <vui-time v-bind:value="value5" />
    <br />
    <vui-time v-bind:value="value6" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value1 = ref<Date>(new Date("2014-01-01"));
      const value2 = ref<string>("2018-12-31");
      const value3 = ref<number>(new Date().getTime() - 5 * 24 * 60 * 60 * 1000);
      const value4 = ref<number>(new Date().getTime() - 5 * 60 * 60 * 1000);
      const value5 = ref<number>(new Date().getTime() - 5 * 60 * 1000);
      const value6 = ref<number>(new Date().getTime());

      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        value6
      };
    }
  });
</script>
`;

export default code;