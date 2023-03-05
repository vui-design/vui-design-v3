<template>
  <vui-example id="example-list-resposive" v-bind:code="code">
    <template v-slot:demo>
      <vui-list
        v-bind:grid="{ gutter: 16, xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 3, xxxl: 2 }"
        v-bind:data="data"
      >
        <template v-slot:item="{ item }">
          <vui-list-item>
            <vui-card v-bind:title="item.title">{{item.description}}</vui-card>
          </vui-list-item>
        </template>
      </vui-list>
    </template>
    <template v-slot:title>响应式的栅格列表</template>
    <template v-slot:description>
      <p>响应式的栅格列表，其中响应尺寸与 <a href="/components/grid">Grid</a> 保持一致。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  interface DataItem {
    title: string;
    description: string;
  };

  const data: DataItem[] = [
    {
      title: "Title 1",
      description: "This is the description!"
    },
    {
      title: "Title 2",
      description: "This is the description!"
    },
    {
      title: "Title 3",
      description: "This is the description!"
    },
    {
      title: "Title 4",
      description: "This is the description!"
    },
    {
      title: "Title 5",
      description: "This is the description!"
    },
    {
      title: "Title 6",
      description: "This is the description!"
    },
    {
      title: "Title 7",
      description: "This is the description!"
    },
    {
      title: "Title 8",
      description: "This is the description!"
    }
  ];

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code,
        data
      };
    }
  });
</script>