<template>
  <vui-example id="example-select-backfill-option-prop" v-bind:code="code">
    <template v-slot:title>定制回填内容</template>
    <template v-slot:description>
      <p>可以对选项的内容进行自定义，使用 <code>backfillOptionProp</code> 指定回填到选择框的 <code>Option</code> 属性。</p>
    </template>
    <template v-slot:demo>
      <vui-select v-model:value="value" backfillOptionProp="label" style="width: 200px;" placeholder="Please select">
        <vui-option value="new york" label="New York">
          New York<span style="float: right; opacity: 0.5;">America</span>
        </vui-option>
        <vui-option value="london" label="London">
          London<span style="float: right; opacity: 0.5;">U.K.</span>
        </vui-option>
        <vui-option value="sydney" label="Sydney">
          Sydney<span style="float: right; opacity: 0.5;">Australian</span>
        </vui-option>
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
      const value = ref<string>();
      const handleChange = (value: string) => {
        console.log(value);
      };

      return {
        code,
        value,
        handleChange
      };
    }
  });
</script>