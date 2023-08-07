<template>
  <vui-example id="example-page-header-ghost" v-bind:code="code">
    <template v-slot:title>白底模式</template>
    <template v-slot:description>
      <p>默认 <code>PageHeader</code> 是透明底色的。在某些情况下，<code>PageHeader</code> 需要自己的背景颜色。</p>
    </template>
    <template v-slot:demo>
      <div class="example-page-header-ghost">
        <vui-page-header title="Title" subTitle="This is a subtitle" v-bind:ghost="false" v-on:back="handleBack">
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
        </vui-page-header>
      </div>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  import VuiExample from "../../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const router = useRouter();
      const handleBack = () => router.back();

      return {
        code,
        handleBack
      };
    }
  });
</script>

<style>
  .example-page-header-ghost { background-color:#f6f6f6; padding:24px; }
</style>