<template>
  <vui-example id="example-checkbox-size" v-bind:code="code">
    <template v-slot:title>尺寸</template>
    <template v-slot:description>
      <p>通过 <code>size</code> 属性使用不同尺寸的多选组合。</p>
    </template>
    <template v-slot:demo>
      <div class="example-checkbox-size">
        <vui-checkbox-group size="small" v-model:value="value1">
          <vui-checkbox v-bind:value="1">A</vui-checkbox>
          <vui-checkbox v-bind:value="2">B</vui-checkbox>
          <vui-checkbox v-bind:value="3">C</vui-checkbox>
          <vui-checkbox v-bind:value="4">D</vui-checkbox>
        </vui-checkbox-group>
        <br />
        <br />
        <vui-checkbox-group v-model:value="value2">
          <vui-checkbox v-bind:value="1">A</vui-checkbox>
          <vui-checkbox v-bind:value="2" disabled>B</vui-checkbox>
          <vui-checkbox v-bind:value="3">C</vui-checkbox>
          <vui-checkbox v-bind:value="4">D</vui-checkbox>
        </vui-checkbox-group>
        <br />
        <br />
        <vui-checkbox-group size="large" v-model:value="value3" disabled>
          <vui-checkbox v-bind:value="1">A</vui-checkbox>
          <vui-checkbox v-bind:value="2">B</vui-checkbox>
          <vui-checkbox v-bind:value="3">C</vui-checkbox>
          <vui-checkbox v-bind:value="4">D</vui-checkbox>
        </vui-checkbox-group>
        <br />
        <br />
        <vui-checkbox-group type="button" size="small" v-model:value="value1">
          <vui-checkbox v-bind:value="1">A</vui-checkbox>
          <vui-checkbox v-bind:value="2">B</vui-checkbox>
          <vui-checkbox v-bind:value="3">C</vui-checkbox>
          <vui-checkbox v-bind:value="4">D</vui-checkbox>
        </vui-checkbox-group>
        <br />
        <br />
        <vui-checkbox-group type="button" v-model:value="value2">
          <vui-checkbox v-bind:value="1">A</vui-checkbox>
          <vui-checkbox v-bind:value="2" disabled>B</vui-checkbox>
          <vui-checkbox v-bind:value="3">C</vui-checkbox>
          <vui-checkbox v-bind:value="4">D</vui-checkbox>
        </vui-checkbox-group>
        <br />
        <br />
        <vui-checkbox-group type="button" size="large" v-model:value="value3" disabled>
          <vui-checkbox v-bind:value="1">A</vui-checkbox>
          <vui-checkbox v-bind:value="2">B</vui-checkbox>
          <vui-checkbox v-bind:value="3">C</vui-checkbox>
          <vui-checkbox v-bind:value="4">D</vui-checkbox>
        </vui-checkbox-group>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const state = reactive({
        value1: [1],
        value2: [1],
        value3: [1]
      });

      return {
        code,
        ...toRefs(state)
      };
    }
  });
</script>

<style>
  .example-checkbox-size { line-height:1; }
</style>