<template>
  <vui-example id="example-skeleton-list" v-bind:code="code">
    <template v-slot:demo>
      <div class="example-skeleton-list">
        <vui-switch v-model="loading" />
        <vui-list layout="vertical" size="large">
          <vui-list-item v-for="(item, index) in data" v-bind:key="index">
            <vui-skeleton v-bind:loading="loading" animated avatar>
              <vui-list-item-meta v-bind:avatar="item.avatar" v-bind:description="item.description" >
                <template v-slot:title>
                  <a href="javascript:;">{{item.title}}</a>
                </template>
              </vui-list-item-meta>
              <article>{{item.content}}</article>
            </vui-skeleton>
            <template v-if="!loading" v-slot:actions>
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
            <template v-if="!loading" v-slot:extra>
              <img width="280" height="166" v-bind:src="item.image" />
            </template>
          </vui-list-item>
        </vui-list>
      </div>
    </template>
    <template v-slot:title>列表</template>
    <template v-slot:description>
      <p>在列表组件中使用加载占位符。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  interface DataItem {
    avatar: string;
    title: string;
    description: string;
    content: string;
    collection: number;
    like: number;
    comment: number;
    image: string;
  };

  const data: DataItem[] = [];

  for (let i = 1; i < 4; i++) {
    data.push({
      avatar: "https://dummyimage.com/32x32/2d8cf0/fff",
      title: "List Item Title " + i,
      description: "This is the description of the list item, which may be very long!",
      content: "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back!",
      collection: 100,
      like: 666,
      comment: 888,
      image: "https://dummyimage.com/280x166/ececec/595959"
    });
  }

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const loading = ref(false);

      return {
        code,
        loading,
        data
      };
    }
  });
</script>

<style>
  .example-skeleton-list .vui-list { margin-top:16px; }
</style>