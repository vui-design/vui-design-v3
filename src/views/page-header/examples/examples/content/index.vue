<template>
  <vui-example id="example-page-header-content" v-bind:code="code">
    <template v-slot:title>组合示例</template>
    <template v-slot:description>
      <p>使用了 <code>PageHeader</code> 提供的所有能力。</p>
    </template>
    <template v-slot:demo>
      <vui-browser>
        <vui-page-header
          avatar="https://dummyimage.com/32x32/2d8cf0/fff"
          title="Title"
          subTitle="This is a subtitle"
        >
          <template v-slot:breadcrumb>
            <vui-breadcrumb>
              <vui-breadcrumb-item>Home</vui-breadcrumb-item>
              <vui-breadcrumb-item>Components</vui-breadcrumb-item>
              <vui-breadcrumb-item>Navigation</vui-breadcrumb-item>
              <vui-breadcrumb-item>PageHeader</vui-breadcrumb-item>
            </vui-breadcrumb>
          </template>
          <template v-slot:tags>
            <vui-tag color="red">Red Tag</vui-tag>
            <vui-tag color="blue">Blue Tag</vui-tag>
          </template>
          <template v-slot:extra>
            <vui-button>Action 1</vui-button>
            <vui-button>Action 2</vui-button>
            <vui-button type="primary">Action 3</vui-button>
          </template>
          <vui-descriptions>
            <vui-description label="UserName">Chillyme</vui-description>
            <vui-description label="Telephone">18012341234</vui-description>
            <vui-description label="Live">Hangzhou, Zhejiang</vui-description>
            <vui-description label="Address" v-bind:span="2">
              No. 01, Wenyi Road, Xihu District, Hangzhou, Zhejiang, China
            </vui-description>
            <vui-description label="Remark">Empty</vui-description>
          </vui-descriptions>
          <template v-slot:footer>
            <vui-menu mode="horizontal" defaultSelectedKey="1">
              <vui-menu-item key="1" title="Navigation 1" />
              <vui-menu-item key="2" title="Navigation 2" />
            </vui-menu>
          </template>
        </vui-page-header>
      </vui-browser>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../../components/example/index.vue";
  import VuiBrowser from "../../../../../components/browser/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample,
      VuiBrowser
    },
    setup() {
      return {
        code
      };
    }
  });
</script>