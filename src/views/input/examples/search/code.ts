const code =
`<template>
  <vui-space direction="vertical">
    <vui-input-search v-model:value="value" v-on:search="handleSearch" placeholder="Enter something..." style="width: 200px" />
    <vui-input-search v-model:value="value" v-on:search="handleSearch" type="primary" placeholder="Enter something..." style="width: 200px" />
    <vui-input-search v-model:value="value" v-bind:icon="false" v-on:search="handleSearch" type="primary" text="Search" placeholder="Enter something..." style="width: 228px" />
    <vui-input-search v-model:value="value" v-on:search="handleSearch" type="primary" text="Search" placeholder="Enter something..." style="width: 248px" />
    <vui-input-search v-model:value="value" v-on:search="handleSearch" loading placeholder="Enter something..." style="width: 200px" />
    <vui-input-search v-model:value="value" v-on:search="handleSearch" loading type="primary" text="Search" placeholder="Enter something..." style="width: 248px" />
  </vui-space>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const value = ref<string>("");
      const handleSearch = (keyword: string) => {
        console.log("value:", value.value);
        console.log("keyword:", keyword);
      };

      return {
        value,
        handleSearch
      };
    }
  });
</script>
`;

export default code;