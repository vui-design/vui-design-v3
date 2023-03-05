const code =
`<template>
  <vui-list layout="vertical" size="large">
    <vui-list-item v-for="(item, index) in data" v-bind:key="index">
      <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description" >
        <template v-slot:title>
          <a href="javascript:;">{{item.title}}</a>
        </template>
      </vui-list-item-meta>
      <article>{{item.content}}</article>
      <template v-slot:actions>
        <a href="javascript:;">
          <vui-icon type="star" style="margin-right: 4px;" />{{item.collection}}
        </a>
        <a href="javascript:;">
          <vui-icon type="thumb-up" style="margin-right: 4px;" />{{item.like}}
        </a>
        <a href="javascript:;">
          <vui-icon type="chat-ellipsis" style="margin-right: 4px;" />{{item.comment}}
        </a>
      </template>
      <template v-slot:extra>
        <img width="280" height="166" v-bind:src="item.image" />
      </template>
    </vui-list-item>
  </vui-list>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  const data = [
    {
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      title: "List Item Title",
      description: "This is the description of the list item, which may be very long!",
      content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",
      collection: 100,
      like: 666,
      comment: 888,
      image: "https://dummyimage.com/280x166/ececec/595959"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      title: "List Item Title",
      description: "This is the description of the list item, which may be very long!",
      content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",
      collection: 100,
      like: 666,
      comment: 888,
      image: "https://dummyimage.com/280x166/ececec/595959"
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