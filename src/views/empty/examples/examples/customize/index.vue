<template>
  <vui-example id="example-empty-customize" v-bind:code="code">
    <template v-slot:title>自定义</template>
    <template v-slot:description>
      <p>自定义图片、描述、附属内容。</p>
    </template>
    <template v-slot:demo>
      <vui-empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle="height: 64px;"
      >
        <template v-slot:description>
          <div>Customize description, <a href="javascript:;">Link</a></div>
        </template>
        <vui-button type="primary">Create Now</vui-button>
      </vui-empty>
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