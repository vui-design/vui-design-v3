const code =
`<template>
  <div class="example-checkbox-group-options">
    <vui-checkbox-group v-model:value="value1" v-bind:options="options1" />
    <br />
    <br />
    <vui-checkbox-group v-model:value="value2" v-bind:options="options2" />
    <br />
    <br />
    <vui-checkbox-group v-model:value="value3" v-bind:options="options3" disabled />
    <br />
    <br />
    <vui-checkbox-group v-model:value="value4" v-bind:options="options4">
      <template v-slot:label="{ option }">{{option.label}}</template>
    </vui-checkbox-group>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  const options1 = ["A", "B", "C", "D"];
  const options2 = [
    { label: "A", value: "A" },
    { label: "B", value: "B", disabled: true },
    { label: "C", value: "C" },
    { label: "D", value: "D" }
  ];
  const options3 = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" }
  ];
  const options4 = ["A", "B", "C", "D"];

  export default defineComponent({
    setup() {
      const value1 = ref(["A"]);
      const value2 = ref(["A"]);
      const value3 = ref(["A"]);
      const value4 = ref(["A"]);

      return {
        value1,
        value2,
        value3,
        value4,
        options1,
        options2,
        options3,
        options4
      };
    }
  });
</script>

<style>
  .example-checkbox-group-options { line-height:1; }
</style>
`;

export default code;