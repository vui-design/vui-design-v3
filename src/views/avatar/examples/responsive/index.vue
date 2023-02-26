<template>
  <vui-example id="example-avatar-responsive" v-bind:code="code">
    <template v-slot:demo>
      <vui-avatar v-bind:size="size" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </template>
    <template v-slot:title>响应式尺寸</template>
    <template v-slot:description>
      <p>头像大小可以根据屏幕大小自动调整。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
  import code from "./code";

  export default defineComponent({
    components: {
      VuiExample
    },
    setup() {
      const size = ref({
        xs: "small",
        sm: "medium",
        md: "large",
        lg: 64,
        xl: 80,
        xxl: 100
      });

      return {
        code,
        size
      };
    }
  });
</script>