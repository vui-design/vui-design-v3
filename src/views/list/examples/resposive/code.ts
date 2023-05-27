const code =
`<template>
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

<script lang="ts">
  import { defineComponent } from "vue";

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
    setup() {
      return {
        data
      };
    }
  });
</script>
`;

export default code;