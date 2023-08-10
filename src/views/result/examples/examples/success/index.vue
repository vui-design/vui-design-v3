<template>
  <vui-example id="example-result-success" v-bind:code="code">
    <template v-slot:title>成功类型</template>
    <template v-slot:description>
      <p>操作成功的结果展示。</p>
    </template>
    <template v-slot:demo>
      <vui-result
        status="success"
        title="This is result title"
        description="Here is a brief description of the result of the operation."
      >
        <template v-slot:extra>
          <vui-space>
            <vui-button type="primary">Back Home</vui-button>
            <vui-button>Continue</vui-button>
          </vui-space>
        </template>
      </vui-result>
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