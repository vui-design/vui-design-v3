const code =
`<template>
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

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";

  export default defineComponent({
    setup() {
      const router = useRouter();
      const handleBack = () => router.back();

      return {
        handleBack
      };
    }
  });
</script>

<style>
  .example-page-header-ghost { background-color:#f6f6f6; padding:24px; }
</style>
`;

export default code;