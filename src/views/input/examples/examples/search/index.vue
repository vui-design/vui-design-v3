<template>
  <vui-example id="example-input-search" v-bind:code="code">
    <template v-slot:title>搜索框</template>
    <template v-slot:description>
      <p>带有搜索按钮的输入框。</p>
    </template>
    <template v-slot:demo>
      <vui-space direction="vertical">
        <vui-input-search v-model:value="value" v-on:search="handleSearch" placeholder="Enter something..." style="width: 200px" />
        <vui-input-search v-model:value="value" v-on:search="handleSearch" type="primary" placeholder="Enter something..." style="width: 200px" />
        <vui-input-search v-model:value="value" v-bind:icon="false" v-on:search="handleSearch" type="primary" text="Search" placeholder="Enter something..." style="width: 228px" />
        <vui-input-search v-model:value="value" v-on:search="handleSearch" type="primary" text="Search" placeholder="Enter something..." style="width: 248px" />
        <vui-input-search v-model:value="value" v-on:search="handleSearch" loading placeholder="Enter something..." style="width: 200px" />
        <vui-input-search v-model:value="value" v-on:search="handleSearch" loading type="primary" text="Search" placeholder="Enter something..." style="width: 248px" />
      </vui-space>
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
      const value = ref<string>("");
      const handleSearch = (keyword: string) => {
        console.log("value:", value.value);
        console.log("keyword:", keyword);
      };

      return {
        code,
        value,
        handleSearch
      };
    }
  });
</script>