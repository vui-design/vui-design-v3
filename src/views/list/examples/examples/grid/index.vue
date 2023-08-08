<template>
  <vui-example id="example-list-grid" v-bind:code="code">
    <template v-slot:title>栅格列表</template>
    <template v-slot:description>
      <p>可以利用 <code>List</code> 的 <code>grid</code> 属性来实现栅格列表；其中 <code>grid.gutter</code> 用于控制栅格间隔，<code>grid.span</code> 设置每列的占位格数。</p>
    </template>
    <template v-slot:demo>
      <vui-list v-bind:grid="{ gutter: 16, span: 6 }" v-bind:data="data">
        <template v-slot:item="{ item }">
          <vui-list-item>
            <vui-card v-bind:title="item.title">{{item.description}}</vui-card>
          </vui-list-item>
        </template>
      </vui-list>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
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