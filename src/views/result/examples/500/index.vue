<template>
  <vui-example id="example-result-500" v-bind:code="code">
    <template v-slot:demo>
      <vui-result
        status="500"
        title="500"
        description="Sorry, the server is wrong."
      >
        <template v-slot:extra>
          <vui-button type="primary">Back Home</vui-button>
        </template>
      </vui-result>
    </template>
    <template v-slot:title>500</template>
    <template v-slot:description>
      <p>服务器发生了错误。</p>
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