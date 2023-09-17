<template>
  <vui-example id="example-select-hide-selected-options" v-bind:code="code">
    <template v-slot:title>隐藏已选选项</template>
    <template v-slot:description>
      <p>隐藏下拉列表中已选择的选项。</p>
    </template>
    <template v-slot:demo>
      <vui-select v-model:value="value" multiple placeholder="Please select">
        <template v-for="option in options">
          <vui-option
            v-if="value.indexOf(option) === -1"
            v-bind:key="option"
            v-bind:value="option"
            v-on:change="handleChange"
          >
            {{option}}
          </vui-option>
        </template>
      </vui-select>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<string[]>([]);
      const options = ref<string[]>(["New York", "London", "Sydney", "Ottawa", "Paris", "Canberra"]);
      const handleChange = (value: string[]) => {
        console.log(value);
      };

      return {
        code,
        value,
        options,
        handleChange
      };
    }
  });
</script>