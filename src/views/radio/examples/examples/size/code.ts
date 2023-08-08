const code =
`<template>
  <div class="example-radio-size">
    <vui-radio-group size="small" v-model:value="value1">
      <vui-radio v-bind:value="1">A</vui-radio>
      <vui-radio v-bind:value="2">B</vui-radio>
      <vui-radio v-bind:value="3">C</vui-radio>
      <vui-radio v-bind:value="4">D</vui-radio>
    </vui-radio-group>
    <br />
    <br />
    <vui-radio-group v-model:value="value2">
      <vui-radio v-bind:value="1">A</vui-radio>
      <vui-radio v-bind:value="2" disabled>B</vui-radio>
      <vui-radio v-bind:value="3">C</vui-radio>
      <vui-radio v-bind:value="4">D</vui-radio>
    </vui-radio-group>
    <br />
    <br />
    <vui-radio-group size="large" v-model:value="value3" disabled>
      <vui-radio v-bind:value="1">A</vui-radio>
      <vui-radio v-bind:value="2">B</vui-radio>
      <vui-radio v-bind:value="3">C</vui-radio>
      <vui-radio v-bind:value="4">D</vui-radio>
    </vui-radio-group>
    <br />
    <br />
    <vui-radio-group type="button" size="small" v-model:value="value1">
      <vui-radio v-bind:value="1">A</vui-radio>
      <vui-radio v-bind:value="2">B</vui-radio>
      <vui-radio v-bind:value="3">C</vui-radio>
      <vui-radio v-bind:value="4">D</vui-radio>
    </vui-radio-group>
    <br />
    <br />
    <vui-radio-group type="button" v-model:value="value2">
      <vui-radio v-bind:value="1">A</vui-radio>
      <vui-radio v-bind:value="2" disabled>B</vui-radio>
      <vui-radio v-bind:value="3">C</vui-radio>
      <vui-radio v-bind:value="4">D</vui-radio>
    </vui-radio-group>
    <br />
    <br />
    <vui-radio-group type="button" size="large" v-model:value="value3" disabled>
      <vui-radio v-bind:value="1">A</vui-radio>
      <vui-radio v-bind:value="2">B</vui-radio>
      <vui-radio v-bind:value="3">C</vui-radio>
      <vui-radio v-bind:value="4">D</vui-radio>
    </vui-radio-group>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from "vue";

  export default defineComponent({
    setup() {
      const state = reactive({
        value1: 1,
        value2: 1,
        value3: 1
      });

      return {
        ...toRefs(state)
      };
    }
  });
</script>

<style>
  .example-radio-size { line-height:1; }
</style>
`;

export default code;