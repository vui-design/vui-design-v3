<template>
  <vui-example id="example-result-info" v-bind:code="code">
    <template v-slot:demo>
      <vui-result
        title="This is result title"
        description="Here is a brief description of the result of the operation."
      >
        <template v-slot:extra>
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template v-slot:title>消息类型</template>
    <template v-slot:description>
      <p>消息类型的结果展示。</p>
    </template>
  </vui-example>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import VuiExample from "../../../../components/example/index.vue";
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