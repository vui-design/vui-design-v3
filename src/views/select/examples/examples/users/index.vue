<template>
  <vui-example id="example-select-users" v-bind:code="code">
    <template v-slot:title>搜索用户</template>
    <template v-slot:description>
      <p>一个带有远程搜索，防抖控制，请求时序控制，加载状态的多选示例。</p>
    </template>
    <template v-slot:demo>
      <vui-select
        v-model:value="value"
        v-bind:filter="false"
        v-bind:loading="loading"
        v-on:search="handleSearch"
        multiple
        searchable
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
    "Abby", "Aimee", "Alisa", "Allison", "Amber", "Amy", "Anastasia", "Angelia", "Beatrice", "Becky",
    "Beenle", "Betty", "Camille", "Candice", "Carrie", "Cassandra", "Cindy", "Demi", "Diana", "Dolores",
    "Editha", "Edith", "Elizabeth", "Ellen", "Fannie", "Frances", "Grace", "Greta", "Gwendolyn", "Heidi",
    "Helena", "Ingrid", "Jacqueline", "Jean", "Jenny", "Kitty", "Lareina", "Lena", "Lillian", "Lydia",
    "Miranda", "Moon", "Nancy", "Purplegrape", "Qearl", "Sammy", "Sunny", "Vanessa", "Vicky", "Victoria"
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