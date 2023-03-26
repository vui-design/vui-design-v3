<template>
  <vui-example id="example-page-header-basic-usage" v-bind:code="code">
    <template v-slot:demo>
      <vui-page-header
        style="border: 1px solid #f0f0f0;"
        title="Title"
        subTitle="This is a subtitle"
        v-on:back="handleBack"
      />
    </template>
    <template v-slot:title>基本用法</template>
    <template v-slot:description>
      <p>标准页头，适合使用在需要简单描述的场景。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  import VuiExample from "../../../../components/example/index.vue";
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