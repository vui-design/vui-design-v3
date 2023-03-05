<template>
  <vui-example id="example-list-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-list>
        <vui-list-item v-for="(item, index) in data" v-bind:key="index">
          <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description">
            <template v-slot:title>
              <a href="javascript:;">{{item.title}}</a>
            </template>
          </vui-list-item-meta>
        </vui-list-item>
      </vui-list>
    </template>
    <template v-slot:title>基础列表</template>
    <template v-slot:description>
      <p>基础列表。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  interface DataItem {
    avatar: string;
    title: string;
    description: string;
  };

  const data: DataItem[] = [
    {
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      title: "List Item Title 1",
      description: "This is the description of the list item, which may be very long!"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      title: "List Item Title 2",
      description: "This is the description of the list item, which may be very long!"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      title: "List Item Title 3",
      description: "This is the description of the list item, which may be very long!"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      title: "List Item Title 4",
      description: "This is the description of the list item, which may be very long!"
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