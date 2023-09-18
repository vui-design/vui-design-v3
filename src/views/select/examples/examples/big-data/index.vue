<template>
  <vui-example id="example-select-big-data" v-bind:code="code">
    <template v-slot:title>大数据</template>
    <template v-slot:description>
      <p><code>Select</code> 组件支持了虚拟滚动技术，在含有大数量选项的同时保持了良好的性能。</p>
    </template>
    <template v-slot:demo>
      <div class="example-select-big-data">
        <vui-select v-model:value="value1" searchable style="width: 200px;" placeholder="Please select">
          <vui-option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{option.label}}</vui-option>
        </vui-select>
        <vui-select v-model:value="value2" multiple searchable placeholder="Please select">
          <vui-option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{option.label}}</vui-option>
        </vui-select>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  interface Option {
    value: number;
    label: string;
  };

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value1 = ref<string>();
      const value2 = ref<string[]>([]);
      let options = ref<Option[]>([]);

      for (let i = 0; i < 10000; i++) {
        const index: number = i + 1;
        const option: Option = {
          value: index,
          label: "Option " + index
        };

        options.value.push(option);
      }

      return {
        code,
        value1,
        value2,
        options
      };
    }
  });
</script>

<style>
  .example-select-big-data .vui-select + .vui-select { margin-top:24px; }
</style>