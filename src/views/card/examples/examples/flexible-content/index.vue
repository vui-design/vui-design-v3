<template>
  <vui-example id="example-card-flexible-content" v-bind:code="code">
    <template v-slot:title>更多内容配置</template>
    <template v-slot:description>
      <p>支持封面、头像、标题、描述信息以及操作区的卡片。</p>
    </template>
    <template v-slot:demo>
      <vui-card style="width: 302px;">
        <template v-slot:cover>
          <img src="https://assets.youzhan.org/img/0/d3/826482502ab5ab3fc98967bd34ed1.jpg" />
        </template>
        <vui-card-meta title="Card title">
          <template v-slot:avatar>
            <vui-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
          <template v-slot:description>This is the description</template>
        </vui-card-meta>
        <template v-slot:actions>
          <vui-icon type="edit" />
          <vui-icon type="dustbin" />
          <vui-icon type="more-x" />
        </template>
      </vui-card>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      return {
        code
      };
    }
  });
</script>