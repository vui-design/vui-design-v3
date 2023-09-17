<template>
  <vui-example id="example-select-remote-search" v-bind:code="code">
    <template v-slot:title>远程搜索</template>
    <template v-slot:description>
      <p>搜索和远程数据结合。</p>
    </template>
    <template v-slot:demo>
      <vui-select
        v-model:value="value"
        v-bind:filter="false"
        v-bind:loading="loading"
        v-on:search="handleSearch"
        searchable
        style="width: 200px;"
        placeholder="Please select"
      >
        <vui-option v-for="option in options" v-bind:key="option" v-bind:value="option">{{option}}</vui-option>
      </vui-select>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  const dataSource: string[] = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New hampshire", "New jersey",
    "New mexico", "New york", "North carolina", "North dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode island", "South carolina",
    "South dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West virginia", "Wisconsin", "Wyoming"
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const value = ref<string>();
      const options = ref<string[]>([]);
      const loading = ref<boolean>(false);

      const timeout = ref<number>();
      const getDataSource = (
        keyword: string,
        callback: (result: string[]) => void
      ) => {
        if (timeout.value) {
          clearTimeout(timeout.value);
          timeout.value = undefined;
        }

        timeout.value = setTimeout(() => {
          callback(dataSource.filter(option => option.toLowerCase().indexOf(keyword.toLowerCase()) > -1));
        }, 1000);
      };

      const handleSearch = (keyword: string) => {
        if (keyword) {
          loading.value = true;
          getDataSource(keyword, (result: string[]) => {
            loading.value = false;
            options.value = result;
          });
        }
      };

      return {
        code,
        value,
        options,
        loading,
        handleSearch
      };
    }
  });
</script>