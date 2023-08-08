<template>
  <vui-example id="example-list-load-more" v-bind:code="code">
    <template v-slot:title>加载更多</template>
    <template v-slot:description>
      <p>加载更多。</p>
    </template>
    <template v-slot:demo>
      <vui-list>
        <vui-list-item v-for="(item, index) in data" v-bind:key="index">
          <vui-skeleton avatar v-bind:title="false" v-bind:paragraph="{ rows: 2, width: ['40%', '100%'] }" animated v-bind:loading="!!item.loading">
            <vui-list-item-meta v-bind:avatar="item.picture.large" description="This is the description of the list item, which may be very long!">
              <template v-slot:title>
                <a href="javascript:;">{{item.name.last}}</a>
              </template>
            </vui-list-item-meta>
          </vui-skeleton>
          <template v-if="!item.loading" v-slot:actions>
            <a href="javascript:;">Edit</a>
            <a href="javascript:;">More</a>
          </template>
        </vui-list-item>
        <template v-if="!loading" v-slot:more>
          <a href="javascript:;" v-on:click="handleLoad">Load more</a>
        </template>
      </vui-list>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  interface DataSourceItem {
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    gender?: string;
    email?: string;
    nat?: string;
    loading?: boolean;
  };

  const pageSize = 3;
  const url = `https://randomuser.me/api/?results=${pageSize}&inc=name,gender,email,nat,picture&noinfo`;

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const loading = ref<boolean>(false);
      const cache = ref<DataSourceItem[]>([]);
      const data = ref<DataSourceItem[]>([]);
      const handleLoad = () => {
        const array = [...new Array(pageSize)];

        loading.value = true;
        data.value = cache.value.concat(array.map(() => ({ loading: true, name: {}, picture: {} })));

        fetch(url).then(response => response.json()).then(response => {
          const value = cache.value.concat(response.results);

          loading.value = false;
          cache.value = value;
          data.value = value;
        });
      };

      onMounted(() => {
        handleLoad();
      });

      return {
        code,
        loading,
        data,
        handleLoad
      };
    }
  });
</script>