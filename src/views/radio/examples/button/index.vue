<template>
  <vui-example id="example-radio-button" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-radio-button">
        <vui-radio-group type="button" v-model:value="value1">
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
        <vui-radio-group type="button" v-model:value="value3" disabled>
          <vui-radio v-bind:value="1">A</vui-radio>
          <vui-radio v-bind:value="2">B</vui-radio>
          <vui-radio v-bind:value="3">C</vui-radio>
          <vui-radio v-bind:value="4">D</vui-radio>
        </vui-radio-group>
      </div>
    </template>
    <template v-slot:title>按钮样式</template>
    <template v-slot:description>
      <p>按钮样式的单选组合。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const state = reactive({
        value1: 1,
        value2: 1,
        value3: 1
      });

      return {
        code,
        ...toRefs(state)
      };
    }
  });
</script>

<style>
  .example-radio-button { line-height:1; }
</style>